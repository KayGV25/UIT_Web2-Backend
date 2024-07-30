const recipeController = require("../controllers/recipeControllers");

const router = require("express").Router();

router.get("/recipes", recipeController.getAll);
router.get("/recipes/search", recipeController.getFilter);
router.post("/recipes", recipeController.createOne);

module.exports = router;