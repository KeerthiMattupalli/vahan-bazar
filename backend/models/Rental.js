import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // Bike, Car, Truck etc
  price: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String },
}, { timestamps: true });

const Rental = mongoose.model("Rental", rentalSchema);

export default Rental;
