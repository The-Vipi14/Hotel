const mongoose = require("mongoose")

const eventInquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    eventType: {
      type: String,
      required: true
    },
    eventDate: {
      type: Date,
      required: true
    },
    guests: {
      type: Number,
      required: true
    },
    message: {
      type: String
    },
    status: {
      type: String,
      default: "pending"
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("EventInquiry", eventInquirySchema)
