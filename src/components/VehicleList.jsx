import React, { useState, useEffect } from "react";
import images from "../images"; // make sure path is correct
import "./VehicleList.css";

export default function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeRentBike, setActiveRentBike] = useState(null);
  const [rentDays, setRentDays] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Hardcoded bikes with images
  useEffect(() => {
    const bikes = [
      { id: 1, name: "Hero", type: "Bike", location: "Hyderabad", price: 300 },
      { id: 2, name: "Activa", type: "Scooty", location: "Bangalore", price: 400 },
      { id: 3, name: "KTM Duke", type: "Bike", location: "Chennai", price: 600 },
      { id: 4, name: "Royal Enfield Classic", type: "Bike", location: "Mumbai", price: 500 },
      { id: 5, name: "Bajaj Pulsar", type: "Bike", location: "Delhi", price: 450 },
      { id: 6, name: "Hero Splendor", type: "Bike", location: "Kolkata", price: 250 },
      { id: 7, name: "Yamaha FZ", type: "Bike", location: "Pune", price: 380 },
      { id: 8, name: "Yamaha R15", type: "Bike", location: "Ahmedabad", price: 320 },
      { id: 9, name: "Suzuki Access 125", type: "Bike", location: "Chandigarh", price: 420 },
      { id: 10, name: "KTM Duke", type: "Bike", location: "Jaipur", price: 550 },
    ];

    const imageKeys = Object.keys(images);
    const bikesWithImages = bikes.map((bike, i) => ({
      ...bike,
      image: images[imageKeys[i % imageKeys.length]],
    }));

    setVehicles(bikesWithImages);
    setLoading(false);
  }, []);

  const handleRentClick = (bike) => {
    setActiveRentBike(bike);
    setRentDays(1);
  };

  const handleConfirmRent = () => {
    const totalPrice = activeRentBike.price * rentDays;
    alert(`You have rented ${activeRentBike.name} for ${rentDays} day(s). Total Price: ₹${totalPrice}`);
    setActiveRentBike(null);
  };

  const handleCancel = () => {
    setActiveRentBike(null);
  };

  // Filter vehicles based on search term
  const filteredVehicles = vehicles.filter((v) =>
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading vehicles...</p>;

  return (
    <div className="vehicle-section">
      {/* 🔍 Search Bar */}
      <div className="vehicle-search">
        <input
          type="text"
          placeholder="Search by name, type, or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Vehicle Grid */}
      <div className="vehicle-list">
        {filteredVehicles.map((v) => (
          <div key={v.id} className="vehicle-card">
            <img src={v.image} alt={v.name} className="vehicle-img" />
            <h3>{v.name}</h3>
            <p className="vehicle-type">{v.type}</p>
            <p className="vehicle-location">{v.location}</p>
            <p className="vehicle-price">{v.price}/day</p>
            <button className="rent-btn" onClick={() => handleRentClick(v)}>Rent Now</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeRentBike && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Rent {activeRentBike.name}</h2>
            <img src={activeRentBike.image} alt={activeRentBike.name} className="modal-img" />
            <p>Type: {activeRentBike.type}</p>
            <p>Location: {activeRentBike.location}</p>
            <p>Price per day: ₹{activeRentBike.price}</p>

            <label>
              Number of days: 
              <input
                type="number"
                min="1"
                value={rentDays}
                onChange={(e) => setRentDays(parseInt(e.target.value))}
              />
            </label>

            <p>Total Price: ₹{activeRentBike.price * rentDays}</p>

            <div className="modal-buttons">
              <button className="confirm-btn" onClick={handleConfirmRent}>Confirm Rent</button>
              <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
