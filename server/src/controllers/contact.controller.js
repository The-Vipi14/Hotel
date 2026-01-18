const ContactMessage = require("../models/ContactMessage.model")

const createContactMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing"
      })
    }

    const contact = await ContactMessage.create({
      name,
      email,
      phone,
      message
    })

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: error.message
    })
  }
}

const getAllContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      data: messages
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

const markMessageAsRead = async (req, res) => {
  try {
    await ContactMessage.findByIdAndUpdate(req.params.id, {
      status: "read"
    })

    res.json({ success: true })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

module.exports = {
  createContactMessage,
  getAllContactMessages,
  markMessageAsRead
}
