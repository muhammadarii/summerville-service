const Career = require("../models/Career");
const JobSeeker = require("../models/JobSeeker");

const CreateJobSeeker = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  try {
    const career = await Career.findById(id);
    if (!career) {
      return res.status(404).json({ error: "Career not found" });
    }

    const newJobSeeker = await JobSeeker.create({
      name,
      email,
      phone,
      resume: req.file.path,
      careerId: id,
    });
    res
      .status(201)
      .json({ message: "Applicant created", jobSeeker: newJobSeeker });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Job Seeker creation failed", details: err.message });
  }
};

const GetAllJobSeekers = async (req, res) => {
  try {
    const jobSeekers = await JobSeeker.find({}).sort({ createdAt: -1 });
    res.status(200).json({ message: "Applicants fetched", jobSeekers });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to get job seekers", details: err.message });
  }
};

const GetJobSeekerById = async (req, res) => {
  const { id } = req.params;
  try {
    const jobSeeker = await JobSeeker.findById(id);
    if (!jobSeeker) {
      return res.status(404).json({ error: "Applicant not found" });
    }
    res.status(200).json({ message: "Applicant by id fetched", jobSeeker });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to get job seeker", details: err.message });
  }
};

const DeleteJobSeeker = async (req, res) => {
  const { id } = req.params;
  try {
    const jobSeeker = await JobSeeker.findByIdAndDelete(id);
    if (!jobSeeker) {
      return res.status(404).json({ error: "Job Seeker not found" });
    }
    res.status(200).json({ message: "Job Seeker deleted", jobSeeker });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to delete job seeker", details: err.message });
  }
};

module.exports = {
  CreateJobSeeker,
  GetAllJobSeekers,
  GetJobSeekerById,
  DeleteJobSeeker,
};
