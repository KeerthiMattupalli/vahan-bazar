import { useState } from "react";
import bikes from "../data/bikes";
import BikeCard from "../components/BikeCard";
import SearchFilters from "../components/SearchFilters";
import "./Listings.css"; // create this for CSS

function Listings() {
  const [filter, setFilter] = useState("");

  const filteredBikes = filter
    ? bikes.filter((b) => b.brand === filter)
    : bikes;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bike Listings</h2>
      <SearchFilters setFilter={setFilter} />

      {/* Only one container for the bike cards */}
      <div className="bike-grid">
        {filteredBikes.map((bike) => (
          <div className="bike-card" key={bike.id}>
            <BikeCard bike={bike} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
