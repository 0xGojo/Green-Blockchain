const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const colors = require('colors/safe');

(async () => {

    let _env = {};
    let _services = [];
    let _controllers = [];
    let _envCache = {};
    let awaitResult;

    //-- load env
    const envs = ['pro', 'uat', 'sit', 'lcl'];
    for (let i = 0; i < envs.length; i++) {
        try {
            let env = dotenv.parse(fs.readFileSync(path.join(__dirname, `./env/${envs[i]}.env`)));
            let keys = Object.keys(env);
            for (let j = 0; j < keys.length; j++) {
                _env[keys[j]] = env[keys[j]];
            }
            console.log(`Load env: ${envs[i]}`);
        } catch (err) {
            console.log(`File not found: ${envs[i]}`);
        }
    }

    //-- global stuffs
    global.errors = require(path.join(__dirname, './errors'));
    global.log = {
        verbose: (message) => {
            if (['verbose'].indexOf(getEnv('LOG_LEVEL', 'verbose')) < 0) return;
            return console.log(colors.gray(`[VERB] ${message}`));
        },
        warn: (message) => {
            if (['verbose', 'warn'].indexOf(getEnv('LOG_LEVEL', 'verbose')) < 0) return;
            return console.log(colors.yellow(`[WARN] ${message}`));
        },
        error: (message, err) => {
            console.log(colors.red(`[ERRO] ${message.code || message}`));
            if (!!err) console.log(err);
        },
        info: (message) => {
            return console.log(`[INFO] ${message}`);
        },
    };
    global.jsonSuccess = (data = []) => {
        return { success: true, data, error: null };
    };
    global.jsonError = (err) => {
        return { success: false, error: err, data: [] };
    };
    global.getEnv = (key, defaultValue) => {
        let env = process.env.NODE_ENV || 'LCL';
        key = `${env}_${key}`;
        if (_envCache[key] !== undefined)
            return _envCache[key];

        if (process.env[key] !== null && process.env[key] !== undefined) {
            _envCache[key] = process.env[key];
            return _envCache[key];
        } else if (_env[key] !== null && _env[key] !== undefined) {
            _envCache[key] = _env[key];
            return _envCache[key];
        } else if (defaultValue !== undefined) {
            _envCache[key] = defaultValue;
            return defaultValue;
        } else if (CONFIG.silentEnv) {
            _envCache[key] = null;
            return null;
        } else {
            console.log(key);
            throw errors.ENV_NOT_SET_ERROR;
        }
    };

    const CONFIG = require(path.join(__dirname, './config'));
    const bootstrap = require(path.join(__dirname, './bootstrap/bootstrap'));

    //-- create server
    const app = express();
    const useragent = require('express-useragent');
    let listener = app;
    //-- applying configs
    if (CONFIG.socketIO && CONFIG.socketIO.enabled) {
        let http = require('http').Server(app);
        global.io = require('socket.io')(http, CONFIG.socketIO.settings.options);
        if (CONFIG.socketIO.settings.jwt.enabled) {
            const socketJwt = require('socketio-jwt');
            io.use(socketJwt.authorize(CONFIG.socketIO.settings.jwt.settings));
        }
        listener = http;
    }

    // get user agent
    app.use(useragent.express());

    if (CONFIG.static && CONFIG.static.enabled && CONFIG.static.settings && CONFIG.static.settings.length) {
        for (let i = 0; i < CONFIG.static.settings.length; i++) {
            app.use(CONFIG.static.settings[i].mount, express.static(CONFIG.static.settings[i].root, CONFIG.static.settings[i].options));
        }
    }

    if (CONFIG.fileUpload && CONFIG.fileUpload.enabled) {
        const fileUpload = require('express-fileupload');
        app.use(fileUpload(CONFIG.fileUpload.settings));
    }

    if (CONFIG.bodyParser && CONFIG.bodyParser.enabled) {
        const bodyParser = require('body-parser');
        if (CONFIG.bodyParser.settings.json)
            app.use(bodyParser.json());
        if (CONFIG.bodyParser.settings.urlencoded)
            app.use(bodyParser.urlencoded(CONFIG.bodyParser.settings.urlencoded));
    }

    if (CONFIG.CORS && CONFIG.CORS.enabled) {
        let settings = Object.keys(CONFIG.CORS.settings).map((key) => {
            return [key, CONFIG.CORS.settings[key]];
        });
        app.use((req, res, next) => {
            for (let i = 0; i < settings.length; i++) {
                res.header(settings[i][0], settings[i][1]);
            }
            next();
        });
    }

    //-- load models
    fs.readdirSync(path.join(__dirname, './models')).forEach((file) => {
        let index = file.indexOf('.js');
        if (index > 0) {
            let model = file.substring(0, index);
            log.verbose(`Load model ${model}`);
            global[model] = require(path.join(__dirname, `./models/${file}`));
        }
    });

    //-- load and bootstrap services, sort asc by bootOrder
    fs.readdirSync(path.join(__dirname, './services')).forEach((file) => {
        let index = file.indexOf('.js');
        if (index > 0) {
            let service = file.substring(0, index);
            _services.push({ filename: service, service: require(path.join(__dirname, `./services/${file}`)) });
        }
    });
    _services.sort((i1, i2) => {
        return (i1.filename < i2.filename) ? -1 : 1;
    });
    awaitResult = await bootstrap.preBoot();
    if (!awaitResult.success) throw awaitResult.error;
    for (let i = 0; i < _services.length; i++) {
        //-- instantiate the service
        log.verbose(`initializing ${_services[i].filename}`);
        let s = _services[i].instance = new (_services[i].service)();
        //-- check service name
        if (s.constructor.name.substring(0, 1).toLowerCase() === s.constructor.name.substring(0, 1)) {
            log.error('Service boot', `First letter of service name must be capitalized, got "${s.constructor.name}"`);
            throw errors.SERVICE_CHECK_FAILED;
        }
    }
    for (let i = 0; i < _services.length; i++) {
        let s = _services[i].instance;
        if (s.boot) {
            log.verbose(`${s.constructor.name} booting`);
            awaitResult = await s.boot();
            if (awaitResult && !awaitResult.success) throw awaitResult.error;
            log.verbose(`${s.constructor.name} boot completed`);
        }
        global[`${s.constructor.name.substring(0, 1).toLowerCase() + s.constructor.name.substring(1)}`] = s;
    }
    awaitResult = await bootstrap.boot();
    if (!awaitResult.success) throw awaitResult.error;

    //-- shutdown middleware
    app.use((req, res, next) => {
        if (global.isShuttingDown)
            return res.json(jsonError(errors.SERVER_SHUTTING_DOWN));
        return next();
    });

    //-- applying other middleware
    let regulators = require('./middleware/regulators');
    if (regulators && regulators.length) {
        for (let i = 0; i < regulators.length; i++)
            app.use(regulators[i]);
    }

    //-- load and apply controllers, asc by name
    fs.readdirSync(path.join(__dirname, './controllers')).forEach((file) => {
        let index = file.indexOf('.js');
        if (index > 0) {
            _controllers.push({ name: file, controller: require(path.join(__dirname, `./controllers/${file}`)) });
        }
    });
    _controllers.sort((i1, i2) => {
        return (i1.name < i2.name ? -1 : 1);
    });
    _controllers.forEach((c) => {
        if (c.controller && typeof c.controller.router === 'function')
            app.use(c.controller.mount || '/', c.controller.router);
    });

    //-- handle signals
    const shutdownProcess = async () => {
        if (!global.isShuttingDown) {
            global.isShuttingDown = true;
            awaitResult = await bootstrap.preExit();
            if (awaitResult && !awaitResult.success) log.warn(awaitResult);
            for (let i = _services.length - 1; i >= 0; i--) {
                let s = _services[i].instance;
                if (s.exit) {
                    awaitResult = await s.exit();
                    if (awaitResult && !awaitResult.success) log.warn(awaitResult);
                    log.verbose(`${s.constructor.name} exited`);
                }
            }
            awaitResult = await bootstrap.exit();
            if (awaitResult && !awaitResult.success) log.warn(awaitResult);
            log.info('All services stopped. Server exited.');
            return process.exit();
        }
    };
    process.on('SIGTERM', () => {
        log.warn(`interrupt signal`);
        return shutdownProcess();
    });
    process.on('SIGINT', () => {
        log.warn(`interrupt signal`);
        return shutdownProcess();
    });
    process.on('uncaughtException', (err) => {
        log.warn(`uncaughtException`);
        log.error('exception', err);
        return shutdownProcess();
    });
    process.on('unhandledRejection', (reason, p) => {
        log.error('unhandledRejection', p);
        return shutdownProcess();
    });

    //-- start server
    let port = getEnv('API_PORT');
    awaitResult = await new Promise((resolve, reject) => {
        listener.listen(port, (err) => {
            if (err) return reject(err);
            return resolve(jsonSuccess());
        }).on('error', (err) => {
            reject(jsonError(errors.LISTEN_ERROR));
        });
    });

    return { port };
})()
    .then((result) => {
        log.info(`Server bootstrapped. Listening at port: ${result.port} , env: ${process.env.NODE_ENV || 'LCL'}`);
    })
    .catch((err) => {
        console.log(err);
        process.exit();
    });

