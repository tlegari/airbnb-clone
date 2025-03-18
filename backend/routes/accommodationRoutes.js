import express from "express";
import mongoose from "mongoose"; 
import multer from "multer";
import path from "path";
import fs from "fs";
import Accommodation from "../models/Accommodation.js";

const router = express.Router();

// Ensure the 'uploads' directory exists
const uploadDir = path.join("uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in the "uploads" directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// POST route to create a new accommodation with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, location, city, rooms, baths, type, description, amenities } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    // Make sure amenities is an array, if it's a string
    const amenitiesArray = Array.isArray(amenities) ? amenities : amenities.split(",");

    const newAccommodation = new Accommodation({
      name,
      location,
      city,
      rooms,
      baths,
      type,
      description,
      amenities: amenitiesArray,
      image: imageUrl,
    });

    await newAccommodation.save();
    res.status(201).json(newAccommodation);
  } catch (error) {
    console.error("❌ Error creating accommodation:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


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



// DELETE route for an accommodation
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId before querying
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid accommodation ID format" });
    }

    const accommodation = await Accommodation.findByIdAndDelete(id);
    if (!accommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }

    res.json({ message: "Accommodation deleted successfully" });
  } catch (error) {
    console.error("Error deleting accommodation:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
