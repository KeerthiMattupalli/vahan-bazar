import mongoose from "mongoose";

const bikeSchema = new mongoose.Schema({
  name: String,
  type: String,
  location: String,
  price: Number,
  image: String,
  days: Number,
  totalPrice: Number,
  user: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Bike", bikeSchema);
