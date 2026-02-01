const RoomBooking = require("../models/RoomBooking.model");
const TableBooking = require("../models/TableBooking.model");
const EventInquiry = require("../models/EventInquiry.model");
const ContactMessage = require("../models/ContactMessage.model");

const startOfTheDay = new Date();
startOfTheDay.setHours(0, 0, 0, 0)

const endOfTheDay = new Date();
endOfTheDay.setHours(23, 59, 59, 999)


const getDashboardStats = async (req, res) => {
  try {
    const totalRoomBookings = await RoomBooking.countDocuments()
    const totalTableBookings = await TableBooking.countDocuments()
    const totalEventInquiries = await EventInquiry.countDocuments()
    const totalContactMessages = await ContactMessage.countDocuments()



    const todayConotactMessages = await ContactMessage.find({
      createdAt: {
        $gte: startOfTheDay,
        $lte: endOfTheDay
      }
    });

    const recentRoomBookings = await RoomBooking.find()
      .sort({ createdAt: -1 })
      .limit(5)

    res.status(200).json({
      success: true,
      stats: {
        totalRoomBookings,
        totalTableBookings,
        totalEventInquiries,
        totalContactMessages
      },
      todayConotactMessages,
      recentRoomBookings
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

const getRoomBookings = async (req, res) => {
  try {

    const todayRoomBookings = await RoomBooking.find({
      createdAt: {
        $gte: startOfTheDay,
        $lte:endOfTheDay
      }
    })
    const roomBookingDetails = await RoomBooking.find()
      .sort({ createdAt: -1 })

    res.send({
      roomBookingDetails,
      todayRoomBookings
    })  
  } catch (error) {
    res.status(500).json({
      message: "internal server error"
    })
  }
}

const getTableBookings = async (req, res) => {
  try {
    const todayTableBookings = await TableBooking.find({
      createdAt: {
        $gte: startOfTheDay,
        $lte:endOfTheDay
      }
    })
    const TableBookings = await TableBooking.find()
      .sort({ createdAt: -1 })

    res.send({
      TableBookings,
      todayTableBookings
    })
  } catch (error) {
    res.status(500).json({
      message: "internal server error"
    })
  }
}

const getEventBookings = async (req, res) => {
  try {
    const EventBookings = await EventInquiry.find()
      .sort({ createdAt: -1 })
     const todayEventBookings = await EventInquiry.find({
      createdAt: {
        $gte: startOfTheDay,
        $lte:endOfTheDay
      }
    })
    res.send({
      EventBookings,
      EventInquiry
    })
  } catch (error) {
    res.status(500).json({
      message: "internal server error"
    })
  }
}

const getContactMessages = async (req, res) => {
  try {
    const ContactMessages = await ContactMessage.find()
      .sort({ createdAt: -1 })

    const todayContactMessages = await ContactMessage.find({
      createdAt:{
        $gte:startOfTheDay,
        $lte:endOfTheDay
      }
    });

    res.send({
      ContactMessages,
      todayContactMessages
    })
  } catch (error) {
    res.status(500).json({
      message: "internal server error"
    })
  }
}

module.exports = {
  getDashboardStats,
  getRoomBookings,
  getTableBookings,
  getEventBookings,
  getContactMessages
}
