const express = require("express");
const {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} = require("../controllers/serviceController");
const protect = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.post("/", protect, upload.single("image"), createService);
router.get("/", protect, getAllServices);
router.get("/:id", protect, getServiceById);
router.put("/:id", protect, upload.single("image"), updateService);
router.delete("/:id", protect, deleteService);

module.exports = router;
