const mongoose = require('mongoose');

module.exports = {

    preBoot: async () => {
        const env = process.env.NODE_ENV || 'LCL';
        const configMongo = {
            'useFindAndModify': false,
            'useNewUrlParser': true,
            'useCreateIndex': true,
            'useUnifiedTopology': true
        };
        //-- this boot runs before any services' boot, we can connect database here
        if (['PRO', 'SIT', 'UAT'].includes(env))
            await mongoose.connect(`mongodb://${getEnv('DB_USER')}:${getEnv('DB_PASSWORD')}@${getEnv('DB_HOST')}/${getEnv('DB_NAME')}`, configMongo);
        else
            await mongoose.connect(`mongodb://${getEnv('DB_HOST')}/${getEnv('DB_NAME')}`, configMongo);
        return jsonSuccess();
    },

    boot: async () => {
        //-- this boot runs after all services had successfully booted
        return jsonSuccess();
    },

    preExit: async () => {
        //-- this exit runs before any services' exit
        return jsonSuccess();
    },

    exit: async () => {
        //-- this exit runs after all services had exited
        return jsonSuccess();
    }

};
