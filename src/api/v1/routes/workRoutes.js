const express = require("express");
const router = express.Router();
const {
  CreateWork,
  GetAllWorks,
  GetWorkById,
  UpdateWork,
  DeleteWork,
} = require("../controllers/workController");
const upload = require("../../../middlewares/uploadMiddleware");
const verifyToken = require("../../../middlewares/authMiddleware");

router.post("/", verifyToken, upload.single("imageUrl"), CreateWork);
router.get("/", GetAllWorks);
router.get("/:id", GetWorkById);
router.put("/:id", verifyToken, upload.single("imageUrl"), UpdateWork);
router.delete("/:id", verifyToken, DeleteWork);

module.exports = router;
