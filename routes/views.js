const router = require('express').Router()
const path = require('path')

router.get('/create-pet', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'create-pet.html'))
})

module.exports = router