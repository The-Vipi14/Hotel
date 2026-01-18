const jwt = require("jsonwebtoken")

const adminAuth = (req, res, next) => {
  const token = req.cookies.adminToken

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (decoded.role !== "admin") {
      return res.status(403).json({ success: false, message: "Forbidden" })
    }

    req.admin = decoded
    next();
  } catch {
    res.status(401).json({ success: false, message: "Invalid token" })
  }
}

module.exports = adminAuth
