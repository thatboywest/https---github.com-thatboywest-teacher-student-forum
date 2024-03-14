const express = require("express");
const router = express.Router();
const User = require("../models/signup");

router.post("/", async (req, res) => {
  const { name, id, password, email, role } = req.body;

  try {
    const newUser = new User({ name, id, password, email, role });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
