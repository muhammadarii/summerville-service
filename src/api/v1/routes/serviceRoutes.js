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

router.post("/", verifyToken, upload.single("image"), CreateService);
router.get("/", verifyToken, GetAllServices);
router.get("/:id", GetServiceById);
router.put("/:id", upload.single("image"), UpdateService);
router.delete("/:id", DeleteService);

module.exports = router;
