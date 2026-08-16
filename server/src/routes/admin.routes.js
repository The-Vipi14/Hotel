const express = require("express");
const { adminLogin, adminRegister, adminLogout, adminProfile } = require("../controllers/admin.controller");

const adminAuth = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/login", adminLogin);
router.post("/register", adminRegister);
    
// router.post("/logout", adminAuth, adminLogout);
// router.get("/profile", adminAuth, adminProfile);

router.post("/logout", adminLogout);
router.get("/profile", adminProfile);

module.exports = router;



