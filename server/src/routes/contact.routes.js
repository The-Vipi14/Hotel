const express = require("express")
const {
  createContactMessage,
  getAllContactMessages,
  markMessageAsRead
} = require("../controllers/contact.controller")

const adminAuth = require("../middlewares/auth.middleware")

const router = express.Router()

router.post("/", createContactMessage)

router.get("/admin", adminAuth, getAllContactMessages)
router.patch("/admin/:id/read", adminAuth, markMessageAsRead)

module.exports = router
