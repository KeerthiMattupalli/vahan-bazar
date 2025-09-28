import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar({ onSearchChange, onStateChange }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isUsedBikes = location.pathname === "/used-bikes";

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", background: "#000", color: "#fff" }}>
      {/* Logo */}
      <h1 style={{ margin: 0 }}>Vahan Bazar</h1>

      {/* Search + State Filter only on UsedBikes page */}
      {isUsedBikes && (
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", margin: "0 auto" }}>
          <input
            type="text"
            placeholder="Search bikes..."
            onChange={(e) => onSearchChange(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", border: "none", width: "250px" }}
          />
          <select
            onChange={(e) => onStateChange(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", border: "none", width: "150px", background: "#fff", color: "#000" }}
          >
            <option value="">Select State / City</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
      )}

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link style={{ color: "#fff" }} to="/">Home</Link>
        <Link style={{ color: "#fff" }} to="/listings">Listings</Link>
        <Link style={{ color: "#fff" }} to="/vehicle-list">Rental</Link>
        <Link style={{ color: "#fff" }} to="/used-bikes">Used Bikes</Link>
        <Link style={{ color: "#fff" }} to="/showrooms">Showrooms</Link>
        <Link style={{ color: "#fff" }} to="/launches">Launches</Link>
        <Link style={{ color: "#fff" }} to="/dashboard">Dashboard</Link>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          style={{ padding: "0.5rem 1rem", borderRadius: "4px", border: "none", cursor: "pointer", background: "#ff3b3b", color: "#fff" }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
