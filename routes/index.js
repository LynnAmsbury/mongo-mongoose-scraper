var router = require("express").Router();
var apiRoutes = require("./api");
var viewRoutes = require("./view");

console.log("SETTING UP ROUTER");
router.use("/api", apiRoutes);
router.use("/", viewRoutes);


module.exports = router;