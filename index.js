const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const allowedOrigins = [
  "https://summerville-service-production.up.railway.app",
  "https://summervilleintech.vercel.app",
  "http://localhost:3000",
  "http://localhost:5000",
];

const authRoutes = require("./src/api/v1/routes/authRoutes");
const careerRoutes = require("./src/api/v1/routes/careerRoutes");
const jobSeekerRoutes = require("./src/api/v1/routes/jobSeekerRoutes");
const serviceRoutes = require("./src/api/v1/routes/serviceRoutes");
const workRoutes = require("./src/api/v1/routes/workRoutes");

const v1 = "/api/v1";

const app = express();
connectDB();

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to api v1 of summerville-service",
  });
});

app.use(`${v1}/auth`, authRoutes);
app.use(`${v1}/careers`, careerRoutes);
app.use(`${v1}/jobseekers`, jobSeekerRoutes);
app.use(`${v1}/services`, serviceRoutes);
app.use(`${v1}/works`, workRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
