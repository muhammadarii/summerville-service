const express = require("express");
const router = express.Router();
const {
  CreateService,
  GetAllServices,
  GetServiceById,
  UpdateService,
  DeleteService,
} = require("../controllers/serviceController");
const upload = require("../../../middlewares/uploadMiddleware");
const verifyToken = require("../../../middlewares/authMiddleware");

router.post("/", verifyToken, upload.single("imageUrl"), CreateService);
router.get("/", GetAllServices);
router.get("/:id", GetServiceById);
router.put("/:id", verifyToken, upload.single("imageUrl"), UpdateService);
router.delete("/:id", verifyToken, DeleteService);

module.exports = router;
