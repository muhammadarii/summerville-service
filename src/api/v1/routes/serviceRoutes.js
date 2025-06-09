const express = require("express");
const router = express.Router();
const {
  CreateService,
  GetAllServices,
  GetServiceById,
  UpdateService,
  DeleteService,
} = require("../controllers/serviceController");
const uploadImage = require("../../../middlewares/uploadImageMiddleware");
const verifyToken = require("../../../middlewares/authMiddleware");

router.post("/", verifyToken, uploadImage.single("imageUrl"), CreateService);
router.get("/", GetAllServices);
router.get("/:id", GetServiceById);
router.put("/:id", verifyToken, uploadImage.single("imageUrl"), UpdateService);
router.delete("/:id", verifyToken, DeleteService);

module.exports = router;
