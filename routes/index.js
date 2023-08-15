const router = require('express').Router()
const viewRoutes = require('./views')
const petApiRoutes = require('./pets')

// api routes
router.use('/api', petApiRoutes)
// page/view routes
router.use('/', viewRoutes)

module.exports = router