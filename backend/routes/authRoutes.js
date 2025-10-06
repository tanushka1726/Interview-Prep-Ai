const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser
} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Get profile (protected)
router.post("/profile", protect, getUserProfile);
router.post("/logout", logoutUser);
// ✅ Check login route (protected)
router.get("/check-login", protect, (req, res) => {
  // user info comes from protect middleware
  res.status(200).json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    profileImageUrl: req.user.profileImageUrl,
  });
});

// Upload image
router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(404).json({ message: "No file uploaded" });
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

module.exports = router;
