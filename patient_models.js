const mongoose = require('mongoose')

const EmergencyContact = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: number,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
  }
)

const patientSchema = mongoose.Schema(
    {
        patientID: {
          type: String,
          required: [true, "Please enter a patient id"]
        },
        surname: {
            type: String,
            required: [true, "Please enter a patient name"]
        },
        otherName: {
          type: String,
          required: [true, "Please enter a product name"]
        },
        gender: {
            type: string,
            required: true,      
        },
        phone: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        }
        
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Patient', patientSchema);

module.exports = Product;