import { useState, useEffect } from "react";
import axios from "axios";

function UsedBikes() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [companyFilter, setCompanyFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bikes");
        setBikes(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching bikes:", err);
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading bikes...</p>;

  // Client-side filtering
  const filteredBikes = bikes.filter((bike) => {
    const priceNum = Number(bike.price.replace(/[^0-9]/g, ""));
    return (
      (companyFilter ? bike.name.toLowerCase().includes(companyFilter.toLowerCase()) : true) &&
      (nameFilter ? bike.name.toLowerCase().includes(nameFilter.toLowerCase()) : true) &&
      (minPrice ? priceNum >= Number(minPrice) : true) &&
      (maxPrice ? priceNum <= Number(maxPrice) : true) &&
      (locationFilter ? bike.location === locationFilter : true)
    );
  });

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {/* Left Sidebar Filters */}
      <div style={{ width: "250px", padding: "1rem", borderRight: "1px solid #ccc" }}>
        <h3>Filters</h3>

        {/* Company */}
        <select
          value={companyFilter}
          onChange={(e) => setCompanyFilter(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        >
          <option value="">Any Company</option>
          <option value="Yamaha">Yamaha</option>
          <option value="Suzuki">Suzuki</option>
          <option value="Hero">Hero</option>
          <option value="Honda">Honda</option>
          <option value="KTM">KTM</option>
        </select>

        {/* Name */}
        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
        />

        {/* Price */}
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{
            width: "48%",
            marginRight: "4%",
            marginBottom: "0.5rem",
            padding: "0.5rem",
          }}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ width: "48%", marginBottom: "0.5rem", padding: "0.5rem" }}
        />

        {/* Location */}
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
        >
          <option value="">Any Location</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
        </select>
      </div>

      {/* Bike Grid */}
      <div style={{ flex: 1, padding: "1rem" }}>
        <h2>Used Bikes</h2>
        {filteredBikes.length === 0 ? (
          <p>No bikes found.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "1rem",
            }}
          >
            {filteredBikes.map((bike) => {
              const years =
                new Date().getFullYear() - new Date(bike.createdAt).getFullYear();
              return (
                <div
                  key={bike._id}
                  className="card"
                  style={{
                    border: "1px solid #ccc",
                    padding: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={bike.image}
                    alt={bike.name}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                  <h3>{bike.name}</h3>
                  <p>₹ {bike.price}</p>
                  <p>{years} year{years > 1 ? "s" : ""} old</p>
                  <p><b>Location:</b> {bike.location}</p>
                  <p><b>User:</b> {bike.user}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default UsedBikes;
