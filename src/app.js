const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const v1 = "/api/v1";

// routes
const authRoutes = require("./api/v1/routes/authRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to api stuckode",
  });
});

// router
app.use(`${v1}/auth`, authRoutes);

module.exports = app;
