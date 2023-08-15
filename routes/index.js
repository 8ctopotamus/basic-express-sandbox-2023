const router = require('express').Router()
const viewRoutes = require('./views')
const petApiRoutes = require('./pets')
const requestLogger = require('../middleware/request-logger')

// api routes
router.use('/api', requestLogger,requestLogger, requestLogger, petApiRoutes)
// page/view routes
router.use('/', viewRoutes)

module.exports = router