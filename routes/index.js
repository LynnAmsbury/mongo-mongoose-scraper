// Require in dependencies
var router = require("express").Router();
var apiRoutes = require("./api");
var viewRoutes = require("./view");

// Sets up router for the view
console.log("SETTING UP ROUTER");
router.use("/api", apiRoutes);
router.use("/", viewRoutes);

// Exports middleware
module.exports = router;