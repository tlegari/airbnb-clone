import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  accommodationId: { type: mongoose.Schema.Types.ObjectId, ref: "Accommodation", required: true },
  city: { type: String, required: true },
  type: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  guests: { type: Number, required: true },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
