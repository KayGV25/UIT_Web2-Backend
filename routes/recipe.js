const recipeController = require("../controllers/recipeControllers");

const router = require("express").Router();

router.get("/recipes", recipeController.getAll);
router.get("/recipes/:id", recipeController.getOne);
router.get("/recipes/search", recipeController.getMany);
router.post("/recipes", recipeController.createOne);
router.delete("/recipes/:id", recipeController.deleteOne);

module.exports = router;