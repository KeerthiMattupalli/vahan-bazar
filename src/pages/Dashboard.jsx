import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css"; // Custom styling

export default function Dashboard() {
  const [bikes, setBikes] = useState([]);
  
  useEffect(() => {
    const fetchBikes = async () => {
      const res = await axios.get("http://localhost:5000/api/rentals");
      setBikes(res.data);
    };
    fetchBikes();
  }, []);
  
  const totalBikes = bikes.length;
  const rentedBikes = bikes.filter(b => b.isRented).length;
  const availableBikes = totalBikes - rentedBikes;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">Total Bikes: {totalBikes}</div>
        <div className="card">Available Bikes: {availableBikes}</div>
        <div className="card">Rented Bikes: {rentedBikes}</div>
      </div>

      {/* Recent Rentals */}
      <h3>Recent Rentals</h3>
      <ul className="recent-rentals">
        {bikes.filter(b => b.isRented).slice(-5).map(b => (
          <li key={b._id}>{b.name} - {b.brand} - ₹{b.price}/day</li>
        ))}
      </ul>
    </div>
  );
}
