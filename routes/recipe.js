const authMiddleware = require("../middlewares/authMiddlewares");
const recipeController = require("../controllers/recipeControllers");

const router = require("express").Router();

router.get("/recipes", recipeController.getAll);
/**
 * @api {get} /recipes Get All
 * @apiName getAll
 * @apiGroup Recipes
 * @apiPermission Every type of user
 * 
 * @apiDescription Get all recipes
 * 
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:443/recipes
 * 
 * @apiSuccess {string} _id ID of the account initialize by MongoDB
 * @apiSuccess {string} name Name of the recipe
 * @apiSuccess {string} ingredients Ingredients needed for the recipe
 * @apiSuccess {string} instructions Instructions on how to make the dish
 * @apiSuccess {string} author Author of the recipe
 * @apiSuccess {string} time Preparation time of the dish
 * @apiSuccess {string} tags Dish categories
 * @apiSuccess {string} image Image URL of the dish
 * @apiSuccess {number} timesFavorite Times the recipe has been added to favorite
 * @apiSuccess {date} createdAt Date and time when the account was created
 * @apiSuccess {date} updatedAt Date and time when the account was updated
 * @apiSuccess {number} __v Version key of the document
 * 
 * @apiSuccessExample Success-Response:
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
 * @apiError (Not Found 404) {json} NoRecipeFound No recipe found
 * 
 * @apiErrorExample Error-Response:
 * "No reicpe found."
 */

router.get("/recipes/search", recipeController.getMany);
router.get("/recipes/:id", recipeController.getOne);
router.post("/recipes/upload", authMiddleware.verifyUser, recipeController.createOne);
/**
 * @api {post} /recipes/upload Create One
 * @apiName createOne
 * @apiGroup Recipes
 * @apiPermission User with an account
 * 
 * @apiDescription Create a recipe
 * 
 * @apiBody {string} name Name of the recipe
 * @apiBody {string} ingredients Ingredients needed for the recipe
 * @apiBody {string} instructions Instructions on how to make the dish
 * @apiBody {string} author Author of the recipe
 * @apiBody {string} time Preparation time of the dish
 * @apiBody {string} tags Dish categories
 * @apiBody {string} image Image URL of the dish
 * 
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:443/recipes/upload
 * 
 * @apiSuccess (Created 201) {string} name Name of the recipe
 * @apiSuccess (Created 201) {string} ingredients Ingredients needed for the recipe
 * @apiSuccess (Created 201) {string} instructions Instructions on how to make the dish
 * @apiSuccess (Created 201) {string} author Author of the recipe
 * @apiSuccess (Created 201) {string} time Preparation time of the dish
 * @apiSuccess (Created 201) {string} tags Dish categories
 * @apiSuccess (Created 201) {string} image Image URL of the dish
 * @apiSuccess (Created 201) {number} timesFavorite Times the recipe has been added to favorite
 * @apiSuccess (Created 201) {string} _id ID of the account initialize by MongoDB
 * @apiSuccess (Created 201) {date} createdAt Date and time when the account was created
 * @apiSuccess (Created 201) {date} updatedAt Date and time when the account was updated
 * @apiSuccess (Created 201) {number} __v Version key of the document 
 * 
 * @apiSuccessExample Success-Response:
 * {
 *   "name": "Vegetable Stir Fry",
 *   "ingredients": "Broccoli, bell peppers, carrots, soy sauce, garlic, ginger, olive oil",
 *   "instructions": "Stir fry vegetables in olive oil with garlic and ginger. Add soy sauce and serve.",
 *   "author": "Emily Johnson",
 *   "time": "20 minutes",
 *   "tags": "Vegan, quick",
 *   "image": "https://example.com/images/stirfry.jpg",
 *   "timesFavorite": 1,
 *   "_id": "66b5d068c9059bc658ab5ebe",
 *   "createdAt": "2024-08-09T08:16:40.445Z",
 *   "updatedAt": "2024-08-09T08:16:40.445Z",
 *   "__v": 0
 * }
 * 
 * @apiError (Unauthorized 401) {json} Unauthenticated User don't have token
 * @apiError (Forbidden 403) {json} InvalidToken User's token has expired 
 * 
 * @apiErrorExample Error-Response:
 * "Invalid token."
 */

router.delete("/recipes/:id", authMiddleware.verifyAdmin, recipeController.deleteOne);

module.exports = router;