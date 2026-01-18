const express = require("express")
const {
  createTableBooking,
  getAllTableBookings
} = require("../controllers/tableBooking.controller")

const router = express.Router()

router.post("/book-table", createTableBooking)
router.get("/bookings", getAllTableBookings)

module.exports = router
