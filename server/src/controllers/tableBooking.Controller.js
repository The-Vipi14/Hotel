const TableBooking = require("../models/TableBooking.model")

const createTableBooking = async (req, res) => {
  try {
    const booking = await TableBooking.create(req.body)
    res.status(201).json({
      success: true,
      message: "Table booked successfully",
      data: booking
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to book table",
      error: error.message
    })
  }
}

const getAllTableBookings = async (req, res) => {
  try {
    const bookings = await TableBooking.find().sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      data: bookings
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

module.exports = {
  createTableBooking,
  getAllTableBookings
}
