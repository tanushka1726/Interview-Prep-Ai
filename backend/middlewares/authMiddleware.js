const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
   console.log("Headers.cookie:", req.headers.cookie);
  console.log("req.cookies:", req.cookies);
  try {
    // Get token from cookie
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request object
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    res.status(401).json({ message: "Token failed", error: error.message });
  }
};

module.exports = { protect };
