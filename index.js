const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./src/api/v1/routes/authRoutes");
const serviceRoutes = require("./src/api/v1/routes/serviceRoutes");
const careerRoutes = require("./src/api/v1/routes/careerRoutes");

const v1 = "/api/v1";

const app = express();
connectDB();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to api ticketing web app",
  });
});

app.use(`${v1}/auth`, authRoutes);
app.use(`${v1}/services`, serviceRoutes);
app.use(`${v1}/careers`, careerRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
