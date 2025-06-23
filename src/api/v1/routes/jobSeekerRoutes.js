const express = require("express");
const router = express.Router();
const {
  CreateJobSeeker,
  GetAllJobSeekers,
  GetJobSeekerById,
  DeleteJobSeeker,
} = require("../controllers/jobSeekerController");
const uploadFile = require("../../../middlewares/uploadFileMiddleware");
const verifyToken = require("../../../middlewares/authMiddleware");

router.post("/apply/:id", uploadFile.single("resume"), CreateJobSeeker);
router.get("/", verifyToken, GetAllJobSeekers);
router.get("/:id", verifyToken, GetJobSeekerById);
router.delete("/:id", verifyToken, DeleteJobSeeker);

module.exports = router;
