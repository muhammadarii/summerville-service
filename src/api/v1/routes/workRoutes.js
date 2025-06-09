const express = require("express");
const router = express.Router();
const {
  CreateWork,
  GetAllWorks,
  GetWorkById,
  UpdateWork,
  DeleteWork,
} = require("../controllers/workController");
const uploadImage = require("../../../middlewares/uploadImageMiddleware");
const verifyToken = require("../../../middlewares/authMiddleware");

router.post("/", verifyToken, uploadImage.single("imageUrl"), CreateWork);
router.get("/", GetAllWorks);
router.get("/:id", GetWorkById);
router.put("/:id", verifyToken, uploadImage.single("imageUrl"), UpdateWork);
router.delete("/:id", verifyToken, DeleteWork);

module.exports = router;
