import Accommodation from "../models/Accommodation.js";

export const getAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAccommodation = async (req, res) => {
  try {
    const newAccommodation = new Accommodation(req.body);
    await newAccommodation.save();
    res.status(201).json(newAccommodation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
