const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello NODE API')
})

app.listen(3004, ()=> {
  console.log(`Node API app is running on port 3004`)
})