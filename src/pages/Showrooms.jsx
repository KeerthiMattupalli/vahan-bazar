import React, { useState } from "react";
import showrooms from "../data/showrooms"; // ✅ correct path
import "./Showrooms.css";

function Showrooms() {
  const [search, setSearch] = useState("");

  const filteredShowrooms = showrooms.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="showrooms-container">
      <h1>Showrooms</h1>

      <input
        type="text"
        placeholder="Search by name or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="showroom-list">
        {filteredShowrooms.map((s) => (
          <div key={s.id} className="showroom-card">
            <h2>{s.name}</h2>
            <p>City: {s.city}</p>
            <p>Address: {s.address}</p>
            <p>Contact: {s.contact}</p>
            <p>Type: {s.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showrooms;
