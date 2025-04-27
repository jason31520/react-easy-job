const cors = require('cors')
const express = require('express')
const app = express()
const userRouter = require('./router/user')


app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/user', userRouter)

const port = 6500
app.listen(port, () => {
  console.log(`Easy-Job-Server is running on http://localhost:${port}`);
})