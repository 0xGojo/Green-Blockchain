const router = require('express').Router();
const validators = require('../middleware/validators');
const policies = require('../middleware/policies');

router.post('/login', [
    validators.valueRequired({attributes: ['email', 'password']}),
    validators.validEmail({attributes: ['email']})
], (req, res) => {
    (async () => {
        return await userService.login(null, req.body);
    })()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            log.error('login', err);
            res.json(jsonError(errors.SYSTEM_ERROR));
        });
});

router.post('/forgot_password', [
    validators.valueRequired({attributes: ['email']}),
    validators.validEmail({attributes: ['email']}),
], (req, res) => {
    (async () => {
        return await userService.forgotPassword(null, req.body);
    })()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            log.error('forgot_password', err);
            res.json(jsonError(errors.SYSTEM_ERROR));
        });
});

router.post('/change_password', [
    policies.authenticated(),
    validators.valueRequired({attributes: ['newPassword']}),
    validators.validPassword('newPassword'),
], (req, res) => {
    (async () => {
        return await userService.changePassword(req.principal, req.body);
    })()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            log.error('change_password', err);
            res.json(jsonError(errors.SYSTEM_ERROR));
        });
});
router.post('/customer_register', [
    validators.valueRequired({attributes: ['email', 'fullName', 'password']}),
    validators.validEmail({attributes: ['email']}),
    validators.validPassword('password'),
], (req, res) => {
    (async () => {
        return await userService.customerRegister(null, req.body);
    })()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            log.error('customer_register', err);
            res.json(jsonError(errors.SYSTEM_ERROR));
        });
});

router.post('/freelancer_register', [
    validators.valueRequired({attributes: ['email', 'fullName', 'birthday', 'phoneNumber', 'country', 'city', 'password']}),
    validators.validEmail({attributes: ['email']}),
    validators.validPassword('password'),
], (req, res) => {
    (async () => {
        return await userService.freelancerRegister(null, req.body);
    })()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            log.error('freelancer_register', err);
            res.json(jsonError(errors.SYSTEM_ERROR));
        });
});

router.post('/confirm_email', [
    validators.valueRequired({attributes: ['email', 'code']}),
    validators.validEmail({attributes: ['email']}),
], (req, res) => {
    (async () => {
        return await userService.confirmEmail(null, req.body);
    })()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            log.error('confirm_email', err);
            res.json(jsonError(errors.SYSTEM_ERROR));
        });
});

router.post('/resend_confirm_email', [
    validators.valueRequired({attributes: ['email']}),
    validators.validEmail({attributes: ['email']}),
], (req, res) => {
    (async () => {
        return await userService.resendConfirmEmail(null, req.body);
    })()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            log.error('resend_confirm_email', err);
            res.json(jsonError(errors.SYSTEM_ERROR));
        });
});

module.exports = {
    mount: '/api',
    router
};
