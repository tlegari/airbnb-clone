import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import Header from "../components/TopHeader/Header";

const AdminDashboard = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/accommodations");
        console.log("Fetched Listings:", response.data);
        setListings(response.data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/accommodations/${id}`);
      setListings(listings.filter((listing) => listing._id !== id));
      alert("Listing deleted successfully!");
    } catch (error) {
      console.error("Error deleting listing:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="admin-dashboard-container">
        <h2>Admin Dashboard</h2>
        <div className="listings-grid">
          {listings.length > 0 ? (
            listings.map((listing) => (
              <div key={listing._id} className="listing-card">
                <img src={listing.image} alt={listing.name} className="listing-image" />
                <div className="listing-details">
                  <h3>{listing.name}</h3>
                  <p><strong>Location:</strong> {listing.location}, {listing.city}</p>
                  <p><strong>Type:</strong> {listing.type}</p>
                  <p><strong>Rooms:</strong> {listing.rooms}</p>
                  <p><strong>Baths:</strong> {listing.baths}</p>
                  <p><strong>Description:</strong> {listing.description}</p>
                  <p><strong>Amenities:</strong> {listing.amenities.join(", ")}</p>
                  <button className="delete-btn" onClick={() => handleDelete(listing._id)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No listings available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
