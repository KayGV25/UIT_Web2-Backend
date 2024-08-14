const authMiddleware = require("../middlewares/authMiddlewares");
const favoriteController = require("../controllers/favoriteControllers");

const router = require("express").Router();

router.get("/recipes/favorite", authMiddleware.verifyUser, favoriteController.getAll);
router.post("/recipes/favorite", authMiddleware.verifyUser, favoriteController.toggleFavorite);

module.exports = router;