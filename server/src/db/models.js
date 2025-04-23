const mongoose = require('mongoose')
const mongo = require('../config/mongo')

mongoose.connect(`${mongo.url}/${mongo.database}`)

const conn = mongoose.connection

conn.on('connected', function() {
  console.log('Connected to MongoDB successfully.')
})

const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  type: { type: String, required: true}, // talent or boss
  company: {type: String},
  position: {type: String},
  description: {type: String },
  salary: {type: String}
})

const UserModel = mongoose.model('user', userSchema)

exports.UserModel = UserModel