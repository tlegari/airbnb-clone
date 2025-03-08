import express from "express";
import { getReservations, createReservation } from "../controllers/reservationController.js";

const router = express.Router();

router.get("/", getReservations); 
router.post("/", createReservation); 

export default router;
