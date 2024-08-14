const authMiddleware = require("../middlewares/authMiddlewares");
const recipeController = require("../controllers/recipeControllers");

const router = require("express").Router();

router.get("/recipes", recipeController.getAll);
router.get("/recipes/search", recipeController.getMany);
router.get("/recipes/:id", recipeController.getOne);
router.post("/recipes/upload", authMiddleware.verifyUser, recipeController.createOne);
router.delete("/recipes/:id", authMiddleware.verifyAdmin, recipeController.deleteOne);

module.exports = router;