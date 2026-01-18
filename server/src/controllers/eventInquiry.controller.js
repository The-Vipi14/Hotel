const EventInquiry = require("../models/EventInquiry.model")

const createEventInquiry = async (req, res) => {
  try {
    const inquiry = await EventInquiry.create(req.body)
    res.status(201).json({
      success: true,
      message: "Event inquiry submitted successfully",
      data: inquiry
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to submit inquiry",
      error: error.message
    })
  }
}

const getAllEventInquiries = async (req, res) => {
  try {
    const inquiries = await EventInquiry.find().sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      data: inquiries
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

module.exports = {
  createEventInquiry,
  getAllEventInquiries
}
