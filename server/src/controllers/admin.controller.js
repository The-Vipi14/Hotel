const Admin = require("../models/Admin.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const adminRegister = async (req, res) => {

  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "please fill all the fields."
      });
    }

    const isAlreadyExists = await Admin.findOne({ email })
    if (isAlreadyExists) {
      return res.status(409).json({
        message: "amdin already exists."
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name,
      password: hashedPassword,
      email
    });

    await newAdmin.save();

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token",
      token,
      { httpOnly: true });

    res.status(200).json({
      message: "Admin registered successfully"
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

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

    res.cookie("token", token, {
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

const adminProfile = async (req, res) => {
  try {
    const admin = req.admin;
    const adminDetails = await Admin.findOne({ _id: admin.id }).select("-password")
    res.json({
      adminDetails
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    })
  }
}

const adminLogout = (req, res) => {
  res.clearCookie("token")
  res.json({ success: true, message: "Logged out" })
}

module.exports = { adminRegister, adminLogin, adminLogout, adminProfile }
