const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = await User.create({
    username,
    password,
  });

  res.status(201).json({
    message: "User registered successfully",
    newUser,
  });
});

module.exports = router;
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(401).json({ message: "User not exist" });
  }
  isPasswordValid = password == user.password
  if(!isPasswordValid){
    return res.status(401).json({message:"Invalid password"})
  }
  res.status(201).json({
    message:"User LoggedIn successfully"
  })
});
