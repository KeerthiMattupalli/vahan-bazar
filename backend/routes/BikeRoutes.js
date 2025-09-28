// import express from "express";
// import Bike from "../models/Bike.js";

// const router = express.Router();

// // Get all bikes
// router.get("/", async (req, res) => {
//   try {
//     const bikes = await Bike.find();
//     res.json(bikes);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get a bike by id
// router.get("/:id", async (req, res) => {
//   try {
//     const bike = await Bike.findById(req.params.id);
//     res.json(bike);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Create a new bike
// router.post("/", async (req, res) => {
//   const bike = new Bike(req.body);
//   try {
//     const savedBike = await bike.save();
//     res.status(201).json(savedBike);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Update a bike
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedBike = await Bike.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedBike);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Delete a bike
// router.delete("/:id", async (req, res) => {
//   try {
//     await Bike.findByIdAndDelete(req.params.id);
//     res.json({ message: "Bike deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// export default router;

import express from "express";
import Bike from "../models/Bike.js";

const router = express.Router();

// Get all bikes with optional filters
router.get("/", async (req, res) => {
  try {
    const { name, minPrice, maxPrice, location } = req.query;

    const filter = {};
    if (name) filter.name = { $regex: name, $options: "i" };
    if (location) filter.location = location;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const bikes = await Bike.find(filter);
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
