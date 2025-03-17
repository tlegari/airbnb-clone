import express from "express";
import mongoose from "mongoose"; // Add mongoose for ObjectId validation
import Accommodation from "../models/Accommodation.js";

const router = express.Router();

// Get all accommodations
router.get("/", async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (error) {
    console.error("Error fetching accommodations:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Fetching a single accommodation by ID
router.get("/:id", async (req, res) => {
  try {
    // Validate ObjectId before querying
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid accommodation ID format" });
    }

    const accommodation = await Accommodation.findById(req.params.id);
    if (!accommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }

    res.json(accommodation);
  } catch (error) {
    console.error("Error fetching accommodation by ID:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

export default router;
