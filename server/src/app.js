const express = require("express")
const cors = require("cors")

const roomBookingRoutes = require("./routes/roomBooking.routes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/rooms", roomBookingRoutes)

app.get("/", (req, res) => {
  res.send("Hotel Backend Running")
})

module.exports = app
