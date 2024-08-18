const authMiddleware = require("../middlewares/authMiddlewares");
const favoriteController = require("../controllers/favoriteControllers");

const router = require("express").Router();

router.get("/favorites/recipes/:id", authMiddleware.verifyUser, favoriteController.getAll);
/**
 * @api {get} /favorites/recipes/:id Get All
 * @apiName getAll
 * @apiGroup Favorites
 * @apiPermission User with an account
 * 
 * @apiDescription Get all favorite recipes of a specific user
 * 
 * @apiParam {string} id Current user ID
 * 
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:443/favorites/recipes/:id 
 * 
 * @apiSuccess {string} _id ID of the account initialize by MongoDB
 * @apiSuccess {string} name Name of the recipe
 * @apiSuccess {string} ingredients Ingredients needed for the recipe
 * @apiSuccess {string} instructions Instructions on how to make the dish
 * @apiSuccess {string} author Author of the recipe
 * @apiSuccess {string} time Preparation time of the dish
 * @apiSuccess {string} tags Dish categories
 * @apiSuccess {string} image Image URL of the dish
 * @apiSuccess {string} timesFavorite Times the recipe has been added to favorite
 * @apiSuccess {string} createdAt Date and time when the account was created
 * @apiSuccess {string} updatedAt Date and time when the account was updated
 * @apiSuccess {string} __v Version key of the document
 * 
 * @apiSuccessExample Success response:
 * [
 *   {
 *       "_id": "66b5ed3edd701fb723e99497",
 *       "name": "Spaghetti Carbonara",
 *       "ingredients": "Spaghetti, eggs, Parmesan cheese, pancetta, black pepper, garlic",
 *       "instructions": "Cook spaghetti.\nIn a bowl, mix eggs and cheese. \nCook pancetta with garlic, then combine with spaghetti and egg mixture. \nServe with pepper",
 *       "author": "KayGV",
 *       "time": "30 minutes",
 *       "tags": "Italian, pasta, dinner",
 *       "image": "http://res.cloudinary.com/dbhemcgm4/image/upload/v1723198782/caut5xb3bl2pxt1dotnq.jpg",
 *       "timesFavorite": 1,
 *       "createdAt": "2024-08-09T10:19:42.946Z",
 *       "updatedAt": "2024-08-17T05:42:45.974Z",
 *       "__v": 0
 *   }
 * ]
 * 
 * @apiError (Unauthorized 401) {json} Unauthenticated User don't have token
 * @apiError (Forbidden 403) {json} InvalidToken User's token has expired
 * @apiError (Internal Server Error 500) {json} IdNotfound User ID not found
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

router.post("/favorites/recipes", authMiddleware.verifyUser, favoriteController.toggleFavorite);
/**
 * @api {post} /favorites/recipes Toggle Favorite
 * @apiName toggleFavorite
 * @apiGroup Favorites
 * @apiPermission User with an account
 * 
 * @apiDescription Toggle a favorite recipe of a specific user
 * 
 * @apiBody {string} userId Current user ID
 * @apiBody {string} recipeId Recipe ID of the recipe to be toggle
 * 
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:443/favorites/recipes
 * 
 * @apiSuccessExample Success-Response:
 * 1
 * 
 * @apiError (Unauthorized 401) {json} Unauthenticated User don't have token
 * @apiError (Forbidden 403) {json} InvalidToken User's token has expired
 * @apiError (Internal Server Error 500) {json} IdNotfound User ID or recipe ID not found 
 * 
 * @apiErrorExample Error-Response:
 * {
 *   "stringValue": "\"1\"",
 *   "valueType": "string",
 *   "kind": "ObjectId",
 *   "value": "1",
 *   "path": "_id",
 *   "reason": {},
 *   "name": "CastError",
 *   "message": "Cast to ObjectId failed for value \"1\" (type string) at path \"_id\" for model \"Recipe\""
 * }
 */

module.exports = router;