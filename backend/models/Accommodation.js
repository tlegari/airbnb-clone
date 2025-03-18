import mongoose from "mongoose";

const AccommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  city: { type: String, required: true },
  rooms: { type: Number, required: true },
  baths: { type: Number, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  amenities: { type: [String], default: [] },
  image: { type: String, required: false },
}, { timestamps: true });

const Accommodation = mongoose.model("Accommodation", AccommodationSchema);
export default Accommodation;

