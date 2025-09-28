import express from "express";
import Bike from "../models/Bike.js";
const router = express.Router();

router.get("/", async (req, res) => { 
  try {
    const bikes = await Bike.find();
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bikes", error: err });
  }
});

router.post("/", async (req, res) => { 
  try {
    const bike = new Bike(req.body);
    await bike.save();
    res.status(201).json(bike);
  } catch (err) {
    res.status(500).json({ message: "Failed to rent bike", error: err });
  }
});

export default router;
