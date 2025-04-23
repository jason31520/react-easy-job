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

function testSave() {
  const user = {
    username: 'Jason31520',
    password: md5('123456'),
    type: 'talent'
    ,
  }
  const userModel = new UserModel(user)
  userModel.save(user)
}

function testFind() {
  const loadUsers = UserModel.find()
  console.log('loadUsers', loadUsers)
  const loadUser = UserModel.findOne({ _id: '6808f4df9cc5e24bf0765728'})
  console.log('loadUser', loadUser)
}

function testUpdate() {
  const result = UserModel.findByIdAndUpdate(
    '6808f4df9cc5e24bf0765728',
    { username: 'XDadada' },
    { new: true }
  )
  console.log('Finish findByIdAndUpdate', result)
}

function testDelete() {
  UserModel.deleteOne({ username:'Jason31520'})
}

testDelete()