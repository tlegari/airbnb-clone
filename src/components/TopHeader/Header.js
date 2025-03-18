import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";

const Header = ({ user }) => {
  return (
    <header className="navbar">
      {/* Logo - Navigates to Home */}
      <Link to="/" className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png?20230603231949"
          alt="Airbnb Logo"
        />
      </Link>

      {/* Navigation Buttons */}
      <nav className="nav-links">
        <Link to="/my-reservations" className="nav-button">View Reservations</Link>
        <Link to="/listings" className="nav-button">View Listings</Link>
        <Link to="/creat_listing" className="nav-button">Create Listing</Link>
      </nav>

      {/* User Info */}
      <div className="user-info">
        <FaUserCircle className="user-icon" />
        <span className="username">{user?.name || "Guest"}</span>
      </div>
    </header>
  );
};

export default Header;
