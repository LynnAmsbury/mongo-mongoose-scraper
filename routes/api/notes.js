// Require in dependencies
var router = require("express").Router();
var noteController = require("../../controllers/note");

// Routes to deal with the notes
router.get("/:id", noteController.find);
router.post("/", noteController.create);
router.delete("/:id", noteController.delete);

// Exports middleware
module.exports = router;