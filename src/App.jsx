import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VehicleList from "./components/VehicleList";

// Auth Pages
import Signup from "./components/SignUp";
import Login from "./components/Login";

// Main Pages
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import ProductPage from "./pages/ProductPage";
import UsedBikes from "./pages/UsedBikes";
import Showrooms from "./pages/Showrooms";
import Launches from "./pages/Launches";
import Dashboard from "./pages/Dashboard";

import "./App.css"; 

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  // Layout wrapper for pages with Navbar + Footer
  const MainLayout = ({ children }) => (
    <div className="app-container">
      <Navbar onSearchChange={setSearchTerm} onStateChange={setStateFilter} />
      <main className="main-content p-4">{children}</main>
      <Footer />
    </div>
  );

  // Home Layout
  const HomeLayout = () => (
    <div className="app-container">
      <Navbar onSearchChange={setSearchTerm} onStateChange={setStateFilter} />
      <header className="header p-8 text-center">
        <Home />
      </header>
      <Footer />
    </div>
  );

  return (
    <Routes>
      {/* Auth Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Default Route: go to login first */}
      <Route path="/" element={<Navigate to="/Home" />} />

      {/* Protected Pages (can add auth logic later) */}
      <Route path="/home" element={<HomeLayout />} />
      <Route path="/listings" element={<MainLayout><Listings /></MainLayout>} />
      <Route path="/product/:id" element={<MainLayout><ProductPage /></MainLayout>} />
      <Route path="/vehicle-list" element={<MainLayout><VehicleList /></MainLayout>} />
      <Route path="/used-bikes" element={
        <MainLayout>
          <UsedBikes searchTerm={searchTerm} stateFilter={stateFilter} />
        </MainLayout>
      } />
      <Route path="/showrooms" element={<MainLayout><Showrooms /></MainLayout>} />
      <Route path="/launches" element={<MainLayout><Launches /></MainLayout>} />
      <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
