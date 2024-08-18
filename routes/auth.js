const authController = require("../controllers/authControllers");

const router = require("express").Router();

router.post("/register", authController.registerUser);
/**
 * @api {post} /register Register User
 * @apiName registerUser
 * @apiGroup Authenticators
 * @apiPermission Every type of user
 * 
 * @apiDescription Register an account for a user
 * 
 * @apiBody {string} username Register username must be unique among users
 * @apiBody {string} password 
 * 
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:443/register
 * 
 * @apiSuccess (Created 201) {string} username Username of the newly created account
 * @apiSuccess (Created 201) {string} password Hashed password of the newly created account
 * @apiSuccess (Created 201) {string} isAdmin Indicates the account is an admin account or not (Default value is `false`)
 * @apiSuccess (Created 201) {string} favorite The account's favorite recipes (Default value is `[]`)
 * @apiSuccess (Created 201) {string} _id ID of the account initialize by MongoDB
 * @apiSuccess (Created 201) {string} createdAt Date and time when the account was created
 * @apiSuccess (Created 201) {string} updatedAt Date and time when the account was updated
 * @apiSuccess (Created 201) {string} __v Version key of the document
 * 
 * @apiSuccessExample Success-Response:
 * {
 *   "username": "KyKyy",
 *   "password": "$2a$10$1yBopugIIJF4eZJQo2WI8uXxLtS0lORtaDWgxgUXtA3zuPXDP/OcS",
 *   "isAdmin": false,
 *   "favorite": [],
 *   "_id": "66c164a44011efe1bc779c0e",
 *   "createdAt": "2024-08-18T03:04:04.662Z",
 *   "updatedAt": "2024-08-18T03:04:04.662Z",
 *   "__v": 0
 * }
 * 
 * @apiError (Internal Server Error 500) {json} UsernameExisted The registing username existed
 * 
 * @apiErrorExample Error-Response:
 * {
 *   "errorResponse": {
 *       "index": 0,
 *       "code": 11000,
 *       "errmsg": "E11000 duplicate key error collection: test.users index: username_1 dup key: { username: \"KyKy\" }",
 *       "keyPattern": {
 *           "username": 1
 *       },
 *       "keyValue": {
 *           "username": "KyKy"
 *       }
 *   },
 *   "index": 0,
 *   "code": 11000,
 *   "keyPattern": {
 *       "username": 1
 *   },
 *   "keyValue": {
 *       "username": "KyKy"
 *   }
 * }
 */

router.post("/login", authController.loginUser);
/**
 * @api {post} /login Login User
 * @apiName loginUser
 * @apiGroup Authenticators
 * @apiPermission Every type of user
 * 
 * @apiDescription Login user with an existing account
 * 
 * @apiBody {string} username 
 * @apiBody {string} password
 * 
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:443/login
 * 
 * @apiSuccess {string} _id ID of the account initialize by MongoDB
 * @apiSuccess {string} username Username of the account
 * @apiSuccess {string} isAdmin Indicates the account is an admin account or not
 * @apiSuccess {string} favorite The account's favorite recipes
 * @apiSuccess {string} createdAt Date and time when the account was created
 * @apiSuccess {string} updatedAt Date and time when the account was updated
 * @apiSuccess {string} __v Version key of the document
 * @apiSuccess {string} token Json Web Token generated when the user login
 * 
 * @apiSuccessExample Success response:
 * {
 *   "_id": "66bc928f08cd9f557899952c",
 *   "username": "KyKy",
 *   "isAdmin": false,
 *   "favorite": [],
 *   "createdAt": "2024-08-14T11:18:39.522Z",
 *   "updatedAt": "2024-08-14T11:18:39.522Z",
 *   "__v": 0,
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmM5MjhmMDhjZDlmNTU3ODk5OTUyYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MjM5NTA4NDUsImV4cCI6MTcyMzk2MTY0NX0.HC7SoD6nMiK6fCNzn_RbET57X9c0ma8ZhZAuFyavDUg"
 * }
 * 
 * @apiError (Not Found 404) {json} UserNotFound The username inputted not found
 * @apiError (Unauthorized 401) {json} WrongPassword The password corresponding with the username is wrong
 * 
 * @apiErrorExample Error-Response: 
 * "User not found."
 */

module.exports = router;