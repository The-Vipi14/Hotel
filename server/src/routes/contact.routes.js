const express = require("express")
const {
  createContactMessage,
  getAllContactMessages,
  markMessageAsRead
} = require("../controllers/contact.controller")

const adminAuth = require("../middlewares/auth.middleware")

const router = express.Router()

router.post("/", createContactMessage)

router.get("/admin",  getAllContactMessages)
router.patch("/admin/:id/read", markMessageAsRead)

module.exports = router
