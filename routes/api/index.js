// Require in routes
var router = require('express').Router();
var fetchRoutes = require('./fetch');
var noteRoutes = require('./notes');
var headlinesRoutes = require('./headlines');
var clearRoutes = require('./clear');

// Set up middleware; these routes all start with '/api'
router.use('/fetch', fetchRoutes);
router.use('/note', noteRoutes);
router.use('/headlines', headlinesRoutes);
router.use('/clear', clearRoutes);

// Export middleware
module.exports = router;