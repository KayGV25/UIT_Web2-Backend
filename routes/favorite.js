const favoriteController = require("../controllers/favoriteControllers");

const router = require("express").Router();

router.get("/recipes/favorite", favoriteController.getAll);
router.post("/recipes/favorite", favoriteController.toggleFavorite);

module.exports = router;