const router = require('express').Router();
const apiRoutes = require('./api');
const viewRoutes = require('./viewroutes');

// Prefix all routes defined in the api directory with `/api`
router.use('/api', apiRoutes);
router.use('/', viewRoutes);

module.exports = router;
