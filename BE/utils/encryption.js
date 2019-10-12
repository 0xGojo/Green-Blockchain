const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
	let saltResult = await new Promise((resolve) => {
		bcrypt.genSalt(Number(getEnv('SALT_ROUND')), (err, salt) => {
			if (err) {
				log.error('genSalt', err);
				return resolve(jsonError(errors.SYSTEM_ERROR));
			}
			return resolve(jsonSuccess(salt));
		});
	});

	if (!saltResult.success) return saltResult;

	return await new Promise((resolve) => {
		bcrypt.hash(password, saltResult.data, (err, hash) => {
			if (err) {
				log.error('hashPassword', err);
				return resolve(jsonError(errors.SYSTEM_ERROR));
			}
			return resolve(jsonSuccess(hash));
		});
	});
};

const generateToken = async (data, key, expiresIn) => {
	return await new Promise(resolve => {
		jwt.sign(data, key, { expiresIn },
			(err, token) => {
				if (err) {
					log.error("generateToken", err);
					return resolve(jsonError(errors.SYSTEM_ERROR));
				}
				return resolve(jsonSuccess(token));
			}
		);
	})
};

const comparePassword = async (password, passwordHash) => {
	return await new Promise((resolve) => {
		bcrypt.compare(password, passwordHash, (err, matched) => {
			if (err) {
				log.error("comparePassword", err);
				return resolve(jsonError(errors.SYSTEM_ERROR));
			}
			if (!matched) {
				return resolve(jsonError(errors.INVALID_CREDENTIAL));
			}
			return resolve(jsonSuccess());
		});
	});
};

module.exports = { hashPassword, generateToken, comparePassword };
