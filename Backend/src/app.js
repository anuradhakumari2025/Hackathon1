const express = require("express")
const app = express()
const authRoutes = require("./routes/auth.routes")
const cors = require("cors");

app.use(express.json())

app.use(
  cors({
    origin: "https://hackathon-3rvw.onrender.com", // your frontend
    credentials: true,
  })
);

app.use("/auth",authRoutes)

module.exports = app