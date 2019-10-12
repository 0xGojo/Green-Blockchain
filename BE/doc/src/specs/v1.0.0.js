/**
 * @apiDefine AdminOnly Admin role required
 * User must login as admin to perform this action
 */
// ======================= AUTH =============================
/**
 * @api {POST} /login Login of admin
 * @apiName Login of admin
 * @apiGroup AUTH
 * @apiVersion 1.0.0
 * @apiExample {curl} Example URL:
 *     {{DOMAIN}}/api/login
 * @apiDescription
 * Login of admin
 *
 * @apiParam {String} email Email of admin
 * @apiParam {String} password Password to login
 *
 * @apiSuccess {Boolean} success <code>true</code>
 * @apiSuccess {Null} error <code>null</code>
 * @apiSuccess {Object} data
 * @apiSuccess {String} data.token Access token

 * @apiSuccessExample {json} Success-Response:
 * {
 *     "success": true,
 *     "data": {
 *         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU1MmE4ZGU4MWRjNjkyNDg4MzQxMmMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NjYyODM0OTUsImV4cCI6MTU2NjM2OTg5NX0.623-6T5akjQGHHW_9JVzeYrYH2npbNJ_Tlw7nf47RFs",
 *      }
 * }
 * @apiError {Boolean} success <code>false</code>
 * @apiError {Object} error
 *  @apiError {String} error.message
 * - <code>Invalid credential</code>
 *
 *  @apiErrorExample {json} Error-Response:
 *     {
 *          "success": false,
 *          "error": {
 *               "message": "Invalid credential"
 *          }
 *     }
 */


// ======================= EVENTS =============================
/**
 * @api {GET} /events Get available events
 * @apiPermission Authorized
 * @apiName Get available events
 * @apiGroup EVENTS
 * @apiVersion 1.0.0
 * @apiDescription Get available events
 * @apiExample {curl} Example URL:
 *     {{DOMAIN}}/api/event?page=1&limit=10
 *
 * @apiHeader {String} Authorization Access token.
 *
 * @apiSuccess {Boolean} success <code>true</code>
 * @apiSuccess {Null} error <code>null</code>
 * @apiSuccess {Object} data
 * @apiSuccess {Number} data.total Total of events
 * @apiSuccess {Number} data.pages Number of page events
 * @apiSuccess {Array} data.list Array of events
 * @apiSuccess {ObjectId} data.list._id Id of event
 * @apiSuccess {String} data.list.name Name of event
 * @apiSuccess {Date} data.list.startDate Start date of event
 * @apiSuccess {Number} data.list.dueDate Due date of event
 * @apiSuccess {String} data.list.description Description of event
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "data": {
 *       "total": 2,
 *       "pages": 2,
 *       "list": [
 *           {
 *               "_id": "5d949da7898fb18131d3d2c1",
 *               "name": "admjj",
 *               "startDate": "2019-12-02T00:00:00.000Z",
 *               "dueDate": 122,
 *               "description": "12312323423432",
 *               "createdAt": "2019-10-02T12:52:55.319Z",
 *               "updatedAt": "2019-10-02T12:52:55.319Z",
 *               "__v": 0
 *           }
 *       ]
 *   }
 * }
 * @apiError {Boolean} success <code>false</code>
 * @apiError {Object} error
 * @apiError {String} error.message
 * - <code>Not authenticated error</code>
 *  @apiErrorExample {json} Error-Response:
 *     {
 *      "success": false,
 *      "error": {
 *          "message": "Not authenticated error"
 *      }
 *   }
 */

/**
 * @api {POST} /events Create new event
 * @apiPermission Authorized
 * @apiName Create new event
 * @apiGroup EVENTS
 * @apiVersion 1.0.0
 * @apiDescription
 * Create new event
 * @apiExample {curl} Example URL:
 *     {{DOMAIN}}/api/event
 * @apiHeader {String} Authorization Admin access token.
 *
 * @apiParam {String} name Name of event
 * @apiParam {Date} startDate Start date of event
 * @apiParam {Number} dueDate Due date of event
 * @apiParam {String} description Description of event
 *
 * @apiSuccess {Boolean} success <code>true</code>
 * @apiSuccess {Null} error <code>null</code>
 * @apiSuccess {Object} data
 * @apiSuccess {ObjectId} data._id Id of event
 * @apiSuccess {String} data.name Name of event
 * @apiSuccess {Date} data.startDate Start date of event
 * @apiSuccess {Number} data.dueDate Due date of event
 * @apiSuccess {String} data.description Description of event
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "success": true,
 *     "data": {
 *           "_id": "5d94b405c7d5628d6553d1a8",
 *           "name": "GDV Mien Trung",
 *           "startDate": "2019-12-10T00:00:00.000Z",
 *           "dueDate": 12,
 *           "description": "GDV lon nhat Viet Nam",
 *           "createdAt": "2019-10-02T14:28:21.453Z",
 *           "updatedAt": "2019-10-02T14:28:21.453Z",
 *      }
 * }
 * @apiError {Boolean} success <code>false</code>
 * @apiError {Object} error
 * @apiError {String} error.message
 * - <code>Missing required params</code>
 * - <code>Duplicate name error</code>
 *  @apiErrorExample {json} Error-Response:
 *     {
 *         "success": false,
 *          "error": {
 *              "message": "Missing required params"
 *          },
 *     }
 */
/**
 * @api {PUT} /events/:id Update event
 * @apiPermission Authorized
 * @apiName Update event
 * @apiGroup EVENTS
 * @apiVersion 1.0.0
 * @apiDescription
 * Update event
 * @apiExample {curl} Example URL:
 *     {{DOMAIN}}/api/event/5d949ae1b8c51280a9adc2fe
 * @apiHeader {String} Authorization Admin access token.
 *
 * @apiParam {String} name Name of event
 * @apiParam {Date} startDate Start date of event
 * @apiParam {Number} dueDate Due date of event
 * @apiParam {String} description Description of event
 *
 * @apiSuccess {Boolean} success <code>true</code>
 * @apiSuccess {Null} error <code>null</code>
 * @apiSuccess {Object} data
 * @apiSuccess {ObjectId} data._id Id of event
 * @apiSuccess {String} data.name Name of event
 * @apiSuccess {Date} data.startDate Start date of event
 * @apiSuccess {Number} data.dueDate Due date of event
 * @apiSuccess {String} data.description Description of event
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "success": true,
 *     "data": {
 *           "_id": "5d94b405c7d5628d6553d1a8",
 *           "name": "GDV Mien Bac",
 *           "startDate": "2019-12-10T00:00:00.000Z",
 *           "dueDate": 12,
 *           "description": "GDV lon nhat Viet Nam",
 *           "createdAt": "2019-10-02T14:28:21.453Z",
 *           "updatedAt": "2019-10-02T14:28:21.453Z",
 *      }
 * }
 * @apiError {Boolean} success <code>false</code>
 * @apiError {Object} error
 * @apiError {String} error.message
 * - <code>Missing required params</code>
 * - <code>Duplicate name error</code>
 *  @apiErrorExample {json} Error-Response:
 *     {
 *         "success": false,
 *          "error": {
 *              "message": "Missing required params"
 *          },
 *     }
 */

/**
 * @api {DELETE} /events/:id Delete event
 * @apiPermission Authorized
 * @apiName Delete event
 * @apiGroup EVENTS
 * @apiVersion 1.0.0
 * @apiDescription
 * Delete event
 * @apiExample {curl} Example URL:
 *     {{DOMAIN}}/api/event/5d949ae1b8c51280a9adc2fe
 * @apiHeader {String} Authorization Admin access token.
 *
 * @apiSuccess {Boolean} success <code>true</code>
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "success": true,
 * }
 * @apiError {Boolean} success <code>false</code>
 * @apiError {Object} error
 * @apiError {Number} error.code
 * @apiError {String} error.message
 * - <code>Missing required params</code>
 * - <code>Not valid _id mongo </code>
 *  @apiErrorExample {json} Error-Response:
 *     {
 *         "success": false,
 *          "error": {
 *              "message": "Missing required params"
 *          },
 *     }
 */

