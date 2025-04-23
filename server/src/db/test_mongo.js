const md5 = require('blueimp-md5')
const mongo = require('../config/mongo')
const mongoose = require('mongoose')
mongoose.connect(`${mongo.url}/${mongo.database}`)
const conn = mongoose.connection
conn.on('connected', function () {
    console.log('Connected to MongoDB.')
})

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
})
const UserModel = mongoose.model('user', userSchema)

const username = 'Jason31520'
const newUsername = 'SmallDadada'

function testSave() {
  const user = {
    username: username,
    password: md5('123456'),
    type: 'talent'
  }
  const userModel = new UserModel(user)
  userModel.save(user)
}

function testFind() {
  UserModel.findOne({ username: username })
  .then(result => {
    console.log('Find one result', result)
  })
}

function testUpdate() {
  UserModel.findOneAndUpdate(
    { username: username },
    { username: newUsername },
    { new: true }
  ).then(result => {
    console.log('Finish update user', result)
  })
}

function testDelete() {
  UserModel.deleteOne({ username: newUsername })
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.log('Failed to delete', err)
  })
}

testSave()
testFind()
testUpdate()
testDelete()