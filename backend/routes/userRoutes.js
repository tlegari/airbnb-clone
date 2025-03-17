import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// User Registration Route
router.post("/signup", registerUser);

// User Login Route
router.post("/login", loginUser);

export default router;

