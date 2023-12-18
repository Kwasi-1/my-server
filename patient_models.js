const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const EmergencyContact = mongoose.Schema(
  {
    bloodType: {
      type: String,
      required: true,
    },
    temperature: {
      type: number,
      required: true,
    },
    pulse: {
      type: number,
      required: true,
    },
    SP02:{
      type: number,
      required: true,
    }
  }
)
const patientVitals = mongoose.Schema(
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

const patientVisitation = mongoose.Schema(
  {
    patientID: {
      type: String,
      required: [true, "Please enter a patient id"]
    },
    Date: {
      type: Date,
      required: true,
    },
    Time: {
      type: string,
      required: true,
    },
    visitationType: {
      type: string,
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
        required: [true, "Please enter a patient other names"]
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
      },
      emergencyContact : EmergencyContact,
      patientVitals: patientVitals,
      patientVisitation : patientVisitation,
  },
  {
      timestamps: true
  }
)


const Product = mongoose.model('Patient', patientSchema);

module.exports = Product;