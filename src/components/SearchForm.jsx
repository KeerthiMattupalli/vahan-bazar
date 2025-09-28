import React, { useState } from "react";

export default function SearchForm() {
  const [location, setLocation] = useState("");

  return (
    <div className="search-form">
      <div>
        <label>Pickup Location: </label>
        <input
          type="text"
          placeholder="City, address, point of interest"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div>
        <label>Pickup Date: </label>
        <input type="date" />
      </div>

      <div>
        <label>Return Date: </label>
        <input type="date" />
      </div>

      <button className="search-btn">Search</button>
    </div>
  );
}
