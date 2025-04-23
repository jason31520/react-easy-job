const express = require('express')
const router = express.Router()

router.post('/register', (req, res, next) => {
  res.json({
    'code': 0,
    'msg': 'sucess'
  })
})

module.exports = router