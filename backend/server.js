import express from 'express'
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/userRoutes.js";
import accommodationRoutes from "./routes/accommodationRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express(); // Initialize the express application
app.use(express.json()); //Middleware to parse incoming JSON requests
app.use(cors());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", userRoutes);
app.use("/api/accommodations", accommodationRoutes)
app.use("/api/reservations", reservationRoutes);


app.get('/', (req, res) => {
  res.send("Hello Tshego you server is now working") // I added this to test that the server is working through postman
})

// Starting the server and listening on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
