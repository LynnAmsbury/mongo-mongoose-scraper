// Require in dependencies
var router = require("express").Router();
var headlineController = require("../../controllers/headline");

// Routes dealing with the headlines
router.get("/", headlineController.findAll);
router.delete("/:id", headlineController.delete);
router.put("/:id", headlineController.update);

// Exports middleware
module.exports = router;