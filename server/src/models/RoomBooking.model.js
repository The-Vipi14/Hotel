const mongoose = require("mongoose")

const roomBookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    roomType: {
      type: String,
      required: true
    },
    checkIn: {
      type: Date,
      required: true
    },
    checkOut: {
      type: Date,
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

module.exports = mongoose.model("RoomBooking", roomBookingSchema)
