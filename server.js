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

// app.post('/patient', async(req, res) => {
//   try {
//       const product = await Patient.create(req.body)
//       res.status(200).json(product);
      
//   } catch (error) {
//       console.log(error.message);
//       res.status(500).json({message: error.message})
//   }
// })

app.put('/patient/:id', async(req, res) => {
  try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      // we cannot find any product in database
      if(!product){
          return res.status(404).json({message: `cannot find any product with ID ${id}`})
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
      
  } catch (error) {
      res.status(500).json({message: error.message})
  }
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