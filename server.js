const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.get('/', (req, res) => {
  res.send('Hello NODE API')
})

app.post('/patient', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})


mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://admin:12345@cluster0.lumeyhv.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3004, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})