import mongoose from "mongoose";

const AccommodationSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  guests: Number,
  type: String,
  amenities: [String],
  images: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Accommodation", AccommodationSchema);
