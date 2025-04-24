const express = require('express')
const md5 = require('blueimp-md5')
const UserModel = require('../db/models')

const router = express.Router()

router.post('/register', (req, res) => {
  const {username, password, type} = req.body
  UserModel.findOne({username})
  .then(user => {
    if (user) {
      res.json({
        'code': 1,
        'data': null,
        'msg': 'The user exists.'
      })
    } else {
      new UserModel({ username, password: md5(password), type }).save()
      .then(user => {
        res.cookie('userid', user._id, { maxAge: 60 * 60 * 1000 * 24 * 7 })
        res.json({
          'code': 0,
          'data': {
            _id: user._id,
            username,
            type
          },
          'msg': 'sucess'
        })
      })
      .catch(err => {
        res.json({
          'code': 1,
          'data': null,
          'msg': err.message
        })
      })
    }
  })
})

module.exports = router