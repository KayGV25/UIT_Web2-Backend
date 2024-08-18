const authMiddleware = require("../middlewares/authMiddlewares");
const reportController = require("../controllers/reportControllers");

const router = require("express").Router();

router.get("/reports/recipes", authMiddleware.verifyAdmin, reportController.getAll);
/**
 * @api {get} /reports/recipes Get All
 * @apiName getAll
 * @apiGroup Reports
 * @apiPermission User with an admin account
 * 
 * @apiDescription Get all reported recipes
 * 
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:443/reports/recipes
 * 
 * @apiSuccess {string} _id ID of the reported recipe initialize by MongoDB
 * @apiSuccess {string} recipeId ID of the recipe
 * @apiSuccess {string} reportedBy User IDs of the accounts who reported
 * @apiSuccess {string} timesReported Times the recipe has been reported
 * @apiSuccess {string} createdAt Date and time when the account was created
 * @apiSuccess {string} updatedAt Date and time when the account was updated
 * @apiSuccess {string} __v Version key of the document 
 * 
 * @apiSuccessExample Success-Response:
 * [
 *   {
 *       "_id": "66c18727958eefd49bc99b22",
 *       "recipeId": "66b5d05fc9059bc658ab5eba",
 *       "reportedBy": [
 *           "66bc928f08cd9f557899952c"
 *       ],
 *       "timesReported": 1,
 *       "createdAt": "2024-08-18T05:31:19.794Z",
 *       "updatedAt": "2024-08-18T05:31:19.794Z",
 *       "__v": 0
 *   }
 * ]
 * 
 * @apiError (Unauthorized 401) {json} Unauthenticated User don't have token
 * @apiError (Forbidden 403) {json} InvalidToken User's token has expired
 * @apiError (Forbidden 403) {json} NotAdmin User's account is not admin
 * @apiError (Not Found 404) {json} NoRecipeFound No reported recipe found
 * 
 * @apiErrorExample Error-Response:
 * "No reported recipe found."
 */

router.post("/reports/recipes", authMiddleware.verifyUser, reportController.reportOne);
/**
 * @api {post} /reports/recipes Report One
 * @apiName reportOne
 * @apiGroup Reports
 * @apiPermission User with an account
 * 
 * @apiDescription Report a recipe
 * 
 * @apiBody {string} userId Current user ID
 * @apiBody {string} recipeId Recipe ID of the recipe to be reported
 * 
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:443/reports/recipes
 * 
 * @apiSuccess (Created 201) {string} recipeId ID of the recipe
 * @apiSuccess (Created 201) {string} reportedBy User IDs of the accounts who reported
 * @apiSuccess (Created 201) {string} timesReported Times the recipe has been reported
 * @apiSuccess (Created 201) {string} _id ID of the reported recipe initialize by MongoDB
 * @apiSuccess (Created 201) {string} createdAt Date and time when the account was created
 * @apiSuccess (Created 201) {string} updatedAt Date and time when the account was updated
 * @apiSuccess (Created 201) {string} __v Version key of the document
 * 
 * @apiSuccessExample Success-Response:
 * {
 *   "recipeId": "66b5d05fc9059bc658ab5eba",
 *   "reportedBy": [
 *       "66bc928f08cd9f557899952c"
 *   ],
 *   "timesReported": 1,
 *   "_id": "66c18727958eefd49bc99b22",
 *   "createdAt": "2024-08-18T05:31:19.794Z",
 *   "updatedAt": "2024-08-18T05:31:19.794Z",
 *   "__v": 0
 * }
 * 
 * @apiError (Unauthorized 401) {json} Unauthenticated User don't have token
 * @apiError (Forbidden 403) {json} InvalidToken User's token has expired 
 * @apiError (Forbidden 403) {json} OnlyReportOnce User can report only once
 * @apiError (Internal Server Error 500) {json} IdNotfound User ID or recipe ID not found 
 * 
 * @apiErrorExample Error-Response:
 * {
 *   "stringValue": "\"123\"",
 *   "valueType": "string",
 *   "kind": "ObjectId",
 *   "value": "123",
 *   "path": "_id",
 *   "reason": {},
 *   "name": "CastError",
 *   "message": "Cast to ObjectId failed for value \"123\" (type string) at path \"_id\" for model \"User\""
 * }
 */

router.delete("/reports/recipes/:id", authMiddleware.verifyAdmin, reportController.deleteOne);

module.exports = router;