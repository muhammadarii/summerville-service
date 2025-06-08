const Work = require("../models/Work");

const CreateWork = async (req, res) => {
  const { title, description, link, tag } = req.body;
  try {
    const newWork = await Work.create({
      title,
      description,
      imageUrl: req.file.path,
      link,
      tag,
    });
    res.status(201).json({ message: "Work created", work: newWork });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Work creation failed", details: err.message });
  }
};

const GetAllWorks = async (req, res) => {
  try {
    const works = await Work.find({}).sort({ createdAt: -1 });
    res.status(200).json({ works });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Work creation failed", details: err.message });
  }
};

const GetWorkById = async (req, res) => {
  const { id } = req.params;
  try {
    const work = await Work.findById(id);
    res.status(200).json({ work });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Work creation failed", details: err.message });
  }
};

const UpdateWork = async (req, res) => {
  const { id } = req.params;
  const { title, description, link, tag } = req.body;
  try {
    const updateData = { title, description, link, tag };
    if (req.file) updateData.imageUrl = req.file.path;

    const work = await Work.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json({ message: "Work updated", work });
  } catch (err) {
    res.status(400).json({ error: "Work update failed", details: err.message });
  }
};

const DeleteWork = async (req, res) => {
  const { id } = req.params;
  try {
    const work = await Work.findByIdAndDelete(id);
    res.status(200).json({ message: "Work deleted", work });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Work creation failed", details: err.message });
  }
};

module.exports = {
  CreateWork,
  GetAllWorks,
  GetWorkById,
  UpdateWork,
  DeleteWork,
};
