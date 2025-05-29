const Career = require("../models/Career");

const GetAllCareers = async (req, res) => {
  try {
    const careers = await Career.find();
    res.status(200).json({
      message: "Careers successfully",
      careers,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve careers" });
  }
};

const GetCareerById = async (req, res) => {
  const { id } = req.params;
  try {
    const career = await Career.findById(id);
    if (!career) {
      return res.status(404).json({ error: "Career not found" });
    }
    res.status(200).json({
      message: "Career successfully",
      career,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve career" });
  }
};

const CreatedCareer = async (req, res) => {
  const { title, description, requirements } = req.body;
  try {
    const career = new Career({
      title,
      description,
      imageUrl: req.file.path,
      requirements,
    });
    await career.save();
    res.status(201).json({
      message: "Career created successfully",
      career,
    });
  } catch (err) {
    console.error("Error creating career:", err);
    res.status(500).json({ error: "Failed to create career" });
  }
};

const UpdateCareer = async (req, res) => {
  const { id } = req.params;
  const { title, description, requirements } = req.body;
  try {
    const career = await Career.findById(id);
    if (!career) {
      return res.status(404).json({ error: "Career not found" });
    }
    if (req.file) {
      career.imageUrl = req.file.path;
    }
    career.title = title || career.title;
    career.description = description || career.description;
    career.requirements = requirements || career.requirements;
    await career.save();
    res.status(200).json({
      message: "Career updated successfully",
      career,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to update career" });
  }
};

const DeleteCareer = async (req, res) => {
  const { id } = req.params;
  try {
    const career = await Career.findByIdAndDelete(id);
    if (!career) {
      return res.status(404).json({ error: "Career not found" });
    }
    res.status(200).json({
      message: "Career deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete career" });
  }
};

module.exports = {
  GetAllCareers,
  GetCareerById,
  CreatedCareer,
  UpdateCareer,
  DeleteCareer,
};
