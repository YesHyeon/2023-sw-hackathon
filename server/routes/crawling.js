const expression = require("express");
const router = expression.Router();
const crawlingController = require("../controllers/crawlingController");
router.get("/blog", crawlingController.handleCrawling);
module.exports = router;
