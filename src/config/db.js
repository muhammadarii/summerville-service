const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_LOCAL);
    console.log("MongoDB connected");
  } catch (err) {
    process.exit(1);
  }
};

module.exports = connectDB;
