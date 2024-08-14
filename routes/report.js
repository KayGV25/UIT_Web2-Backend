const authMiddleware = require("../middlewares/authMiddlewares");
const reportController = require("../controllers/reportControllers");

const router = require("express").Router();

router.get("/reports/recipes", authMiddleware.verifyAdmin, reportController.getAll);
router.post("/reports/recipes", authMiddleware.verifyUser, reportController.reportOne);
router.delete("/reports/recipes/:id", authMiddleware.verifyAdmin, reportController.deleteOne);

module.exports = router;