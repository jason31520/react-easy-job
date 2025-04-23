const express = require('express');
const app = express();
const userRouter = require('./router/user')

app.use('/api/user', userRouter)

const port = 6500;
app.listen(port, () => {
  console.log(`Easy-Job-Server is running on http://localhost:${port}`);
});