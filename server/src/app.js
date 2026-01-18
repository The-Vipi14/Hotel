const express = require("express")
const cors = require("cors")

const roomBookingRoutes = require("./routes/roomBooking.routes")
const tableBookingRoutes = require("./routes/tableBooking.routes")
const eventInquiryRoutes = require("./routes/eventInquiry.routes")
const adminRoutes = require("./routes/admin.routes")
const adminDashboardRoutes = require("./routes/adminDashboard.routes")


const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/admin", adminRoutes)
app.use("/api/admin", adminDashboardRoutes)


app.use("/api/rooms", roomBookingRoutes)
app.use("/api/tables", tableBookingRoutes)
app.use("/api/events", eventInquiryRoutes)

app.get("/", (req, res) => {
  res.send("Hotel Backend Running")
})

module.exports = app;
