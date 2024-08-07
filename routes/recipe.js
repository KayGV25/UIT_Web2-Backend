const recipeController = require("../controllers/recipeControllers");

const router = require("express").Router();

router.get("/recipes", recipeController.getAll);
router.get("/recipes/:id", recipeController.getOne);
router.get("/recipes/search", recipeController.getFilter);
router.get("/recipes/reported", );
router.post("/recipes/upload", recipeController.createOne);
router.delete("/recipes/:id", )

module.exports = router;