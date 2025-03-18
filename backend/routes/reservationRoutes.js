import express from "express";
import Reservation from "../models/Reservation.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
      const { accommodationId, city, type, checkInDate, checkOutDate, guests } = req.body;
      const newReservation = new Reservation({ accommodationId, city, type, checkInDate, checkOutDate, guests });
  
      await newReservation.save();
      res.status(201).json({ message: "Reservation saved successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to save reservation" });
    }
  });
  
  // Get all reservations
  router.get("/", async (req, res) => {
    try {
      const reservations = await Reservation.find();
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reservations" });
    }
  });
  
  // Delete a reservation
  router.delete("/:id", async (req, res) => {
    try {
      await Reservation.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Reservation deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete reservation" });
    }
  });
  
  export default router;
