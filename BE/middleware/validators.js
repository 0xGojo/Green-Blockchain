module.exports = {
    valueRequired: ({attributes}) => {
        return (req, res, next) => {
            let missedAttributes = null;
            let missing = attributes.some((attr) => {
                let isMissing = !req.body || req.body[attr] === '' || req.body[attr] === undefined || req.body[attr] === null;
                if (isMissing) missedAttributes = attr;
                return isMissing;
            });
            if (missing)
                return res.json(jsonError(errors.MISSING_REQUIRED_VALUE, missedAttributes));

            return next();
        };
    },

    validObjectId: ({attributes}) => {
        return (req, res, next) => {
            let invalid = attributes.some((attr) => {
                if (!req.body || !req.body[attr])
                    return false;
                return !req.body[attr].match(/^[0-9a-fA-F]{24}$/);
            });
            if (invalid)
                return res.json(jsonError(errors.NOT_VALID_ID));
            return next();
        };
    },

    validObjectIdParams: ({attributes}) => {
        return (req, res, next) => {
            let invalid = attributes.some((attr) => {
                if (!req.params || !req.params[attr])
                    return false;
                return !req.params[attr].match(/^[0-9a-fA-F]{24}$/);
            });
            if (invalid)
                return res.json(jsonError(errors.NOT_VALID_ID));
            return next();
        };
    },

    validNumber: ({attributes}) => {
        return (req, res, next) => {
            let invalid = attributes.some((attr) => {
                if (!req.body || !req.body[attr])
                    return false;
                return isNaN(req.body[attr]);
            });
            if (invalid)
                return res.json(jsonError(errors.NOT_VALID_NUMBER_VALUE));
            return next();
        };
    },

    validArray: ({attributes}) => {
        return (req, res, next) => {
            let invalid = attributes.some((attr) => {
                if (!req.body || !req.body[attr])
                    return false;
                return !Array.isArray(req.body[attr]);
            });
            if (invalid)
                return res.json(jsonError(errors.NOT_VALID_ARRAY));
            return next();
        };
    },

    validDateString: ({attributes}) => {
        return (req, res, next) => {
            let invalid = attributes.some((attr) => {
                if (!req.body || !req.body[attr])
                    return false;
                return isNaN(Date.parse(req.body[attr]));
            });
            if (invalid)
                return res.json(jsonError(errors.NOT_VALID_DATE_VALUE));
            return next();
        };
    },

    validEmail: ({attributes}) => {
        return (req, res, next) => {
            let invalid = attributes.some((attr) => {
                if (!req.body || !req.body[attr])
                    return false;
                return !req.body[attr].match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
            });
            if (invalid)
                return res.json(jsonError(errors.NOT_VALID_EMAIL_VALUE));
            return next();
        };
    },

    validPassword: (name) => {
        return (req, res, next) => {
            if (/\s/.test(req.body[name]))
                return res.json(jsonError(errors.PASSWORD_HAVE_SPACE));
            if (req.body[name].length < 6)
                return res.json(jsonError(errors.PASSWORD_TO_SHORT));
            if (req.body[name].length > 50)
                return res.json(jsonError(errors.PASSWORD_TO_LONG));
            return next();
        };
    }
};