import React, { useState, useEffect } from "react";
import "./Launches.css";
import launchBikes from "./launchBikes"; // Sample data

function Launches() {
  const [countdowns, setCountdowns] = useState({});

  // Update countdown timers every second
  useEffect(() => {
    const interval = setInterval(() => {
      const newCountdowns = {};
      launchBikes.forEach((bike) => {
        const launchDate = new Date(bike.launchDate);
        const now = new Date();
        const diff = launchDate - now;
        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
          newCountdowns[bike.id] = { days, hours, minutes, seconds };
        } else {
          newCountdowns[bike.id] = null;
        }
      });
      setCountdowns(newCountdowns);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleNotify = (bikeName) => {
    alert(`You will be notified when ${bikeName} launches!`);
  };

  return (
    <div className="launches-container">
      <header className="launches-hero">
        <h1>Upcoming Launches</h1>
        <p>Stay ahead. Explore the latest bikes & scooters coming soon!</p>
      </header>

      <section className="launches-grid">
        {launchBikes.map((bike) => (
          <div key={bike.id} className="launch-card">
            <img src={bike.image} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>Type: {bike.type}</p>
            <p>Expected Launch: {bike.launchDate}</p>
            {countdowns[bike.id] ? (
              <p>
                Launch in: {countdowns[bike.id].days}d {countdowns[bike.id].hours}h{" "}
                {countdowns[bike.id].minutes}m {countdowns[bike.id].seconds}s
              </p>
            ) : (
              <p>Launched!</p>
            )}
            <button onClick={() => handleNotify(bike.name)}>Notify Me</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Launches;
