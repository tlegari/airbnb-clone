import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./StandardSearch.css";

const StandardSearch = () => {
  const { city } = useParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCityListings = async () => {
      try {
        const response = await axios.get(`/api/accommodations?city=${city}`);
        setListings(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching city listings", error);
      }
    };

    fetchCityListings();
  }, [city]);

  return (
    <div className="city-container">
      <h1>Accommodations in {city}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="city-list">
          {listings.map((listing) => (
            <div key={listing._id} className="city-card">
              <img src={listing.image} alt={listing.title} className="city-img" />
              <div className="city-details">
                <h3>{listing.title}</h3>
                <p>{listing.type}</p>
                <p>Guests: {listing.guests}</p>
                <p>{listing.wifi ? "✅ Free WiFi" : "❌ No WiFi"}</p>
                <p>Reviews: {listing.reviews}</p>
                <p className="price">${listing.price} / night</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StandardSearch;
