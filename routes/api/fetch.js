// Require in dependencies
var router = require('express').Router();
var fetchController = require('../../controllers/fetch.js');

// '/api/fetch/' route
router.get('/', fetchController.scrapeHeadlines);

// Export middleware
module.exports = router;