const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const roomBookingRoutes = require("./routes/roomBooking.routes")
const tableBookingRoutes = require("./routes/tableBooking.routes")
const eventInquiryRoutes = require("./routes/eventInquiry.routes")
const adminRoutes = require("./routes/admin.routes")
const adminDashboardRoutes = require("./routes/adminDashboard.routes")

const app = express()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/rooms", roomBookingRoutes)
app.use("/api/tables", tableBookingRoutes)
app.use("/api/events", eventInquiryRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/admin", adminDashboardRoutes)

module.exports = app
