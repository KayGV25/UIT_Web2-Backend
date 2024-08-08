const reportController = require("../controllers/reportControllers");

const router = require("express").Router();

router.get("/recipes/reports", reportController.getAll);
router.post("/recipes/reports", reportController.reportOne);
router.delete("/recipes/reports", reportController.deleteOne);

module.exports = router;