const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, enum: ["Bike", "Scooter", "EV"], default: "Bike" },
  price: { type: Number, required: true },
  year: { type: Number },
  fuel: { type: String, enum: ["Petrol", "Diesel", "CNG", "Electric"] },
  location: { type: String },
  condition: { type: String, enum: ["New", "Used"], default: "Used" },
  owners: { type: Number, default: 1 },
  color: { type: String },
  image: { type: String },
  user: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Model name: BikeFilter → collection in MongoDB will be 'bikefilters'
module.exports = mongoose.model("BikeFilter", bikeSchema);
