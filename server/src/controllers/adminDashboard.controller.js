const RoomBooking = require("../models/RoomBooking.model")
const TableBooking = require("../models/TableBooking.model")
const EventInquiry = require("../models/EventInquiry.model")

const getDashboardStats = async (req, res) => {
  try {
    const totalRoomBookings = await RoomBooking.countDocuments()
    const totalTableBookings = await TableBooking.countDocuments()
    const totalEventInquiries = await EventInquiry.countDocuments()

    const recentRoomBookings = await RoomBooking.find()
      .sort({ createdAt: -1 })
      .limit(5)

    res.status(200).json({
      success: true,
      stats: {
        totalRoomBookings,
        totalTableBookings,
        totalEventInquiries
      },
      recentRoomBookings
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

module.exports = { getDashboardStats }
