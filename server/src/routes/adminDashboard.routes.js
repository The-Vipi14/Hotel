const express = require("express")
const{
  getDashboardStats,
  getRoomBookings,
  getTableBookings,
  getEventBookings,
  getContactMessages
} = require("../controllers/adminDashboard.controller");

const adminAuth = require("../middlewares/auth.middleware");

const router = express.Router()

router.get("/dashboard",adminAuth, getDashboardStats);
router.get("/rooms",adminAuth, getRoomBookings);
router.get("/events",adminAuth, getEventBookings);
router.get("/tables",adminAuth, getTableBookings);
router.get("/contact",adminAuth, getContactMessages);

module.exports = router
