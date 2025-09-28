import React from "react";
import { Link } from "react-router-dom";
import BikeCard from "../components/BikeCard";
import bikes from "../data/bikes"; // Your bikes data
import "./Home.css";

function Home() {
  // Featured bikes (first 4)
  const featuredBikes = bikes.slice(0, 3);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Vahan Bazar</h1>
        <p>Find, Rent, or Buy your perfect vehicle today!</p>
        <Link to="/listings" className="hero-btn">
          Browse Bikes
        </Link>
      </section>

      {/* Featured Bikes */}
      <section className="featured-bikes">
        <h2>Featured Bikes</h2>
        <div className="bike-grid">
          {featuredBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Browse by Category</h2>
        <div className="categories-flex">
          <Link to="/listings" className="category-card bikes">Bikes</Link>
          <Link to="/listings" className="category-card scooters">Scooters</Link>
          <Link to="/listings" className="category-card cars">Cars</Link>
          <Link to="/listings" className="category-card trucks">Trucks</Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <h2>Why Choose Vahan Bazar?</h2>
        <div className="features-flex">
          <div className="feature-card">
            <h3>Trusted Sellers</h3>
            <p>All vehicles verified for quality and authenticity.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Booking</h3>
            <p>Rent or buy bikes quickly with our seamless process.</p>
          </div>
          <div className="feature-card">
            <h3>Best Prices</h3>
            <p>Affordable rates and great deals for every budget.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
