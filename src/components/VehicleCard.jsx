import React, { useState } from "react";
import VehicleCard from "./VehicleCard";

const vehicles = [
  { name: "Bike", price: "$50", type: "Bike", image: "https://images.unsplash.com/photo-1542683088-abb3da334598?w=500" },
  { name: "Car", price: "$20", type: "Car", image: "https://img.icons8.com/color/96/motorcycle.png" },
  { name: "Truck", price: "$100", type: "Truck", image: "https://img.icons8.com/color/96/truck.png" },
  { name: "Tractor", price: "$120", type: "Tractor", image: "https://img.icons8.com/color/96/tractor.png" },
  { name: "Van", price: "$70", type: "Van", image: "https://img.icons8.com/color/96/minivan.png" },
];

export default function VehicleList() {
  const [filter, setFilter] = useState("All");

  const filteredVehicles = filter === "All" ? vehicles : vehicles.filter(v => v.type === filter);

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label>Filter by Vehicle Type: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>
          <option value="All">All</option>
          <option value="Car">Cars</option>
          <option value="Bike">Bikes</option>
          <option value="Truck">Trucks</option>
          <option value="Tractor">Tractors</option>
          <option value="Van">Vans</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
        {filteredVehicles.map((v, index) => (
          <VehicleCard key={index} vehicle={v} />
        ))}
      </div>
    </div>
  );
}
