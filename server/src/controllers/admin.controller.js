const Admin = require("../models/Admin.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body

    const admin = await Admin.findOne({ email })
    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid credentials" })
    }

    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" })
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000
    })

    res.status(200).json({
      success: true,
      message: "Login successful",
      admin: {
        id: admin._id,
        email: admin.email,
        role: admin.role
      }
    })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

const adminLogout = (req, res) => {
  res.clearCookie("adminToken")
  res.json({ success: true, message: "Logged out" })
}

module.exports = { adminLogin, adminLogout }
    