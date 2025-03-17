import mongoose from "mongoose";

const accommodationSchema = new mongoose.Schema({
  city: String,
  image: String,
  type: String,
  guests: Number,
  wifi: Boolean,
  reviews: Number,
  price: Number,
});

const Accommodation = mongoose.model("Accommodation", accommodationSchema);

export default Accommodation;
