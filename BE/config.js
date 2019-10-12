const path = require('path');

module.exports = {

	//--
	static: {
		enabled: true,
		settings: [{
			mount: '/apidoc',
			root: path.join(__dirname, './doc/dist'),
			options: {}
		},
		{
			mount: '/uploads',
			root: path.join(__dirname, './uploads'),
			options: {}
		}]
	},
	//-- see socketIO
	// socketIO: {
	//     enabled: true,
	//     settings: {
	//         jwt: {
	//             enabled: false,
	//             settings: {
	//                 handshake: true
	//             }
	//         },
	//         redis: {
	//             enabled: true
	//         },
	//         options: {
	//             pingInterval: 10000,
	//             pingTimeout: 5000,
	//             cookie: false
	//         }
	//     }
	// },
	//-- see express-fileupload for more settings
	fileUpload: {
		enabled: true,
		settings: {
			limits: {
				files: 5, //-- maximum number of files for each request
				fileSize: 50 * 1024 * 1024, //-- max file size in byte
			}
		}
	},

	//-- see body-parser for more settings
	bodyParser: {
		enabled: true,
		settings: {
			json: {
				enabled: true,
				settings: { limit: "50mb" }
			},
			urlencoded: {
				enabled: true,
				settings: { limit: "50mb", extended: true, parameterLimit: 1000000 }
			}
		}
	},

	CORS: {
		enabled: true,
		settings: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS, HEAD",
			"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
		}
	},

	silentEnv: false,

};
