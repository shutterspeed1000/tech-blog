const router = require('express').Router();
const apiRoutes = require('./blogroutes');
const viewRoutes = require('./viewroutes');

// Prefix all routes defined in the api directory with `/api`
router.use('/', viewRoutes);
router.use('/api', apiRoutes);

module.exports = router;
