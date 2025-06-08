const Career = require("../models/Career");

const CreateCareer = async (req, res) => {
  const { title, description, requirements } = req.body;
  try {
    const newCareer = await Career.create({
      title,
      description,
      imageUrl: req.file.path,
      requirements,
    });
    res.status(201).json({ message: "Career created", career: newCareer });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Career creation failed", details: err.message });
  }
};

const GetAllCareers = async (req, res) => {
  try {
    const careers = await Career.find({}).sort({ createdAt: -1 });
    res.status(200).json({ careers });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to get careers", details: err.message });
  }
};

const GetCareerById = async (req, res) => {
  const { id } = req.params;
  try {
    const career = await Career.findById(id);
    if (!career) {
      return res.status(404).json({ error: "Career not found" });
    }
    res.status(200).json({ career });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to get career", details: err.message });
  }
};

const UpdateCareer = async (req, res) => {
  const { id } = req.params;
  const { title, description, requirements } = req.body;
  try {
    const updateData = { title, description, requirements };
    if (req.file) updateData.imageUrl = req.file.path;

    const career = await Career.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json({ message: "Career updated", career });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Career update failed", details: err.message });
  }
};

const DeleteCareer = async (req, res) => {
  const { id } = req.params;
  try {
    const career = await Career.findByIdAndDelete(id);
    if (!career) {
      return res.status(404).json({ error: "Career not found" });
    }
    res.status(200).json({ message: "Career deleted", career });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to delete career", details: err.message });
  }
};

module.exports = {
  CreateCareer,
  GetAllCareers,
  GetCareerById,
  UpdateCareer,
  DeleteCareer,
};
