const express = require("express");
const {
  register,
  login,
  getAllUsers,
} = require("../controllers/authController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", protect, getAllUsers);

router.get("/me", protect, (req, res) => res.status(200).json(req.user));

module.exports = router;
