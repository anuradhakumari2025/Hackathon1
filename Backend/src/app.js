const express = require("express")
const app = express()
const authRoutes = require("./routes/auth.routes")
const cors = require("cors");

app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend
    credentials: true,
  })
);

app.use("/auth",authRoutes)

module.exports = app