const express = require("express")
const {
  createEventInquiry,
  getAllEventInquiries
} = require("../controllers/eventInquiry.controller")

const router = express.Router()

router.post("/inquiry", createEventInquiry)
router.get("/inquiries", getAllEventInquiries)

module.exports = router
