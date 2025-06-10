const express = require("express");
const router = express.Router();
const {
  CreateCareer,
  GetAllCareers,
  GetCareerById,
  UpdateCareer,
  DeleteCareer,
} = require("../controllers/careerController");
const uploadImage = require("../../../middlewares/uploadImageMiddleware");
const verifyToken = require("../../../middlewares/authMiddleware");

router.post("/", verifyToken, uploadImage.single("imageUrl"), CreateCareer);
router.get("/", verifyToken, GetAllCareers);
router.get("/:id", GetCareerById);
router.put("/:id", verifyToken, uploadImage.single("imageUrl"), UpdateCareer);
router.delete("/:id", verifyToken, DeleteCareer);

module.exports = router;
