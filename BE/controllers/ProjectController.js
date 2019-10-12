const router = require('express').Router();
const validators = require('../middleware/validators');
const policies = require('../middleware/policies');

router.post('/issue', [
    policies.authenticated(),
    validators.valueRequired({
        attributes: [
            'email',
            'fullName',
            'phoneNumber',
            'country',
            'city',
            'address',
            'lat',
            'long',
            'description',
            'uploads'
        ]
    }),
], (req, res) => {
    (async () => {
        return await issueService.createIssue(null, req.body);
    })()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            log.error('create_issue', err);
            res.json(jsonError(errors.SYSTEM_ERROR));
        });
});

router.get('/issue', [], (req, res) => {
    (async () => {
        return await issueService.getAllIssue(null, req.body);
    })()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            log.error('get_issues', err);
            res.json(jsonError(errors.SYSTEM_ERROR));
        });
});
module.exports = {
    mount: '/api',
    router
};
