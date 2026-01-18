const Admin = require("../models/Admin.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body

    const admin = await Admin.findOne({ email })
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      })
    }

    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      })
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.status(200).json({
      success: true,
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

module.exports = { adminLogin }
