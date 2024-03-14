const express = require("express");
const router = express.Router();
const TextModel = require("../models/questions"); // Adjust the path accordingly

// Create text route
router.post("/", async (req, res) => {
  const { content } = req.body;

  try {
    const newText = new TextModel({ content });
    await newText.save();
    res.status(201).json({ message: "Text created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all texts route
router.get("/", async (req, res) => {
  try {
    const texts = await TextModel.find();
    res.status(200).json(texts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get a specific text by ID route
router.get("/:id", async (req, res) => {
  const textId = req.params.id;

  try {
    const text = await TextModel.findById(textId);
    if (!text) {
      res.status(404).json({ message: "Text not found" });
    } else {
      res.status(200).json(text);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update a text by ID route
router.put("/:id", async (req, res) => {
  const textId = req.params.id;
  const { content } = req.body;

  try {
    const updatedText = await TextModel.findByIdAndUpdate(
      textId,
      { content },
      { new: true }
    );
    if (!updatedText) {
      res.status(404).json({ message: "Text not found" });
    } else {
      res.status(200).json(updatedText);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete a text by ID route
router.delete("/text/:id", async (req, res) => {
  const textId = req.params.id;

  try {
    const deletedText = await TextModel.findByIdAndDelete(textId);
    if (!deletedText) {
      res.status(404).json({ message: "Text not found" });
    } else {
      res.status(200).json({ message: "Text deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
