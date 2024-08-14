const authMiddleware = require("../middlewares/authMiddlewares");
const reportController = require("../controllers/reportControllers");

const router = require("express").Router();

router.get("/recipes/reports", authMiddleware.verifyAdmin, reportController.getAll);
router.post("/recipes/reports/:id", authMiddleware.verifyUser, reportController.reportOne);
router.delete("/recipes/reports/:id", authMiddleware.verifyAdmin, reportController.deleteOne);

module.exports = router;