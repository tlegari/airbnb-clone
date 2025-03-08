import express from "express";
import { getAccommodations, createAccommodation } from "../controllers/accommodationController.js";

const router = express.Router();

router.get("/", getAccommodations); 
router.post("/", createAccommodation); 

export default router;
