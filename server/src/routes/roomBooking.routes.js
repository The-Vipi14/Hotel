const express = require("express")
const {
  createRoomBooking,
  getAllRoomBookings
} = require("../controllers/roomBooking.controller")
const adminAuth = require("../middlewares/auth.middleware")

const router = express.Router()

router.post("/book-room", createRoomBooking)
router.get("/bookings", adminAuth, getAllRoomBookings)

module.exports = router
