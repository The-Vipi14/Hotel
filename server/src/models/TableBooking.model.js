const mongoose = require("mongoose")

const tableBookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    guests: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: "pending"
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("TableBooking", tableBookingSchema)
