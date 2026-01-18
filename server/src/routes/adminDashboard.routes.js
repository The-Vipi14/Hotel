const express = require("express")
const { getDashboardStats } = require("../controllers/adminDashboard.controller")
const adminAuth = require("../middlewares/auth.middleware")

const router = express.Router()

router.get("/dashboard", adminAuth, getDashboardStats)

module.exports = router
