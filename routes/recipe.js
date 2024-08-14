const recipeController = require("../controllers/recipeControllers");
const authMiddleware = require("../middleware/auth");

const router = require("express").Router();

router.get("/recipes", authMiddleware.verifyToken, recipeController.getAll);
router.get("/recipes/search", recipeController.getMany);
router.get("/recipes/:id", recipeController.getOne);
router.post("/recipes/upload", recipeController.createOne);
router.delete("/recipes/:id", recipeController.deleteOne);

module.exports = router;