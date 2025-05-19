const Service = require("../models/Service");

const CreateService = async (req, res) => {
  const { title, description } = req.body;
  try {
    const service = new Service({
      title,
      description,
      imageUrl: req.file.path,
    });
    await service.save();
    res.status(201).json({
      message: "Service created successfully",
      service,
    });
  } catch (err) {
    console.error("Error creating service:", err);
    res.status(500).json({ error: "Failed to create service" });
  }
};

const GetAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      message: "Services retrieved successfully",
      services,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve services" });
  }
};

const GetServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.status(200).json({
      message: "Service retrieved successfully",
      service,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve service" });
  }
};
const UpdateService = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    if (req.file) {
      service.imageUrl = req.file.path;
    }
    service.title = title || service.title;
    service.description = description || service.description;
    await service.save();
    res.status(200).json({
      message: "Service updated successfully",
      service,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to update service" });
  }
};

const DeleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.status(200).json({
      message: "Service deleted successfully",
      // service,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete service" });
  }
};

module.exports = {
  CreateService,
  GetAllServices,
  GetServiceById,
  UpdateService,
  DeleteService,
};
