const express = require("express")
const {
  createRoomBooking,
  getAllRoomBookings
} = require("../controllers/roomBooking.controller")

const router = express.Router()

router.post("/book-room", createRoomBooking)
router.get("/bookings", getAllRoomBookings)

module.exports = router
