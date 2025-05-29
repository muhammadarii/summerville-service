const express = require("express");
const router = express.Router();
const {
  CreatedCareer,
  GetAllCareers,
  GetCareerById,
  UpdateCareer,
  DeleteCareer,
} = require("../controllers/careerController");
const upload = require("../../../middlewares/uploadMiddleware");
const verifyToken = require("../../../middlewares/authMiddleware");

router.post("/", verifyToken, upload.single("image"), CreatedCareer);
router.get("/", verifyToken, GetAllCareers);
router.get("/:id", GetCareerById);
router.put("/:id", upload.single("image"), UpdateCareer);
router.delete("/:id", DeleteCareer);

module.exports = router;
