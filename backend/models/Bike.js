import mongoose from "mongoose";

const bikeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  user: { type: String, required: true },
  image: { type: String },
}, { timestamps: true });

const Bike = mongoose.model("Bike", bikeSchema);

export default Bike;
