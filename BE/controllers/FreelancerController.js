// const router = require('express').Router();
// const validators = require('../middleware/validators');
// const policies = require('../middleware/policies');
//
// router.get('/freelancer', [
//     policies.authenticated(),
//     policies.isAdmin(),
// ], (req, res) => {
//     (async () => {
//         return await freelancerService.getAllFreelancer(null, req.query);
//     })()
//         .then((result) => {
//             res.json(result);
//         })
//         .catch((err) => {
//             log.error('freelancer', err);
//             res.json(jsonError(errors.SYSTEM_ERROR));
//         });
// });
//
// router.get('/freelancer/:id', [
//     policies.authenticated(),
//     policies.isAdmin(),
//     validators.validObjectIdParams({ attributes: ['id'] }),
// ], (req, res) => {
//     (async () => {
//         return await freelancerService.getDetailFreelancer(null, req.params);
//     })()
//         .then((result) => {
//             res.json(result);
//         })
//         .catch((err) => {
//             log.error('freelancer', err);
//             res.json(jsonError(errors.SYSTEM_ERROR));
//         });
// });
//
// router.put('/freelancer/:id', [
//     policies.authenticated(),
//     policies.isAdmin(),
//     validators.valueRequired({ attributes: ['status'] }),
//     validators.validObjectIdParams({ attributes: ['id'] }),
// ], (req, res) => {
//     (async () => {
//         return await freelancerService.updateFreelancer(req.principal, req.body, req.params);
//     })()
//         .then((result) => {
//             res.json(result);
//         })
//         .catch((err) => {
//             log.error('update_freelancer', err);
//             res.json(jsonError(errors.SYSTEM_ERROR));
//         });
// });
//
// module.exports = {
//     mount: '/api',
//     router
// };
