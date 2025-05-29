const express = require("express");
const router = express.Router();
const {
  CreateCareer,
  GetAllCareers,
  GetCareerById,
  UpdateCareer,
  DeleteCareer,
} = require("../controllers/careerController");
const upload = require("../../../middlewares/uploadMiddleware");
const verifyToken = require("../../../middlewares/authMiddleware");

router.post("/", verifyToken, upload.single("imageUrl"), CreateCareer);
router.get("/", GetAllCareers);
router.get("/:id", GetCareerById);
router.put("/:id", verifyToken, upload.single("imageUrl"), UpdateCareer);
router.delete("/:id", verifyToken, DeleteCareer);

module.exports = router;
