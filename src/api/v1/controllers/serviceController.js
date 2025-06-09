const Service = require("../models/Service");

const CreateService = async (req, res) => {
  const { title, descriptions } = req.body;
  try {
    const newService = await Service.create({
      title,
      descriptions,
      imageUrl: req.file.path,
    });
    res.status(201).json({ message: "Service created", service: newService });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Service creation failed", details: err.message });
  }
};

const GetAllServices = async (req, res) => {
  try {
    const services = await Service.find({}).sort({ createdAt: -1 });
    res.status(200).json({ message: "Services fetched", services });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to get services", details: err.message });
  }
};

const GetServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.status(200).json({ message: "Service by id fetched", service });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to get service", details: err.message });
  }
};

const UpdateService = async (req, res) => {
  const { id } = req.params;
  const { title, description, imageUrl } = req.body;
  try {
    const updateData = { title, description, imageUrl };
    const service = await Service.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json({ message: "Service updated", service });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Service update failed", details: err.message });
  }
};

const DeleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted", service });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to delete service", details: err.message });
  }
};

module.exports = {
  CreateService,
  GetAllServices,
  GetServiceById,
  UpdateService,
  DeleteService,
};
