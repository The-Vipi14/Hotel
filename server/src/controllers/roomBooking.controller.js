const RoomBooking = require("../models/RoomBooking.model")

const createRoomBooking = async (req, res) => {
  try {
    const booking = await RoomBooking.create(req.body)
    res.status(201).json({
      success: true,
      message: "Room booked successfully",
      data: booking
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to book room",
      error: error.message
    })
  }
}

const getAllRoomBookings = async (req, res) => {
  try {
    const bookings = await RoomBooking.find().sort({ createdAt: -1 })
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
  createRoomBooking,
  getAllRoomBookings
}
