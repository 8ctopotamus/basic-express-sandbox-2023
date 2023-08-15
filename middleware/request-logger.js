const requestLogger = (req, res, next) => {
  console.log(`${req.method} request for path ${req.url}`)
  next()
}

module.exports = requestLogger