// Require in dependencies
var router = require("express").Router();
var clearController = require("../../controllers/clear");

// Route to clear articles
router.get("/", clearController.clearDB);

// Export middleware
module.exports = router;