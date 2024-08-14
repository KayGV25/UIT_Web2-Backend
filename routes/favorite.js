const authMiddleware = require("../middlewares/authMiddlewares");
const favoriteController = require("../controllers/favoriteControllers");

const router = require("express").Router();

router.get("/favorites/recipes", authMiddleware.verifyUser, favoriteController.getAll);
router.post("/favorites/recipes", authMiddleware.verifyUser, favoriteController.toggleFavorite);

module.exports = router;