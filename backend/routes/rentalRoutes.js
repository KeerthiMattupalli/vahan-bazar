import express from "express";
import Rental from "../models/Rental.js";

const router = express.Router();

// Get all rentals
router.get("/", async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new rental
router.post("/", async (req, res) => {
  const rental = new Rental(req.body);
  try {
    const savedRental = await rental.save();
    res.status(201).json(savedRental);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get rental by ID
router.get("/:id", async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id);
    res.json(rental);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update rental
router.put("/:id", async (req, res) => {
  try {
    const updatedRental = await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRental);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete rental
router.delete("/:id", async (req, res) => {
  try {
    await Rental.findByIdAndDelete(req.params.id);
    res.json({ message: "Rental deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
