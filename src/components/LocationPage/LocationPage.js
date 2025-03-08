import React from "react";
import SearchNavbar from "../TopHeader/SearchNavbar";
import { Link } from "react-router-dom";
import "./LocationPage.css";

const locations = [
  {
    city: "New York",
    image:
      "https://images.unsplash.com/photo-1549323423-68d192fa0b9c",
    type: "Apartment",
    guests: 4,
    wifi: true,
    reviews: 120,
    price: 150,
  },
  {
    city: "London",
    image:
      "https://images.unsplash.com/photo-1564025037669-447dc9690915",
    type: "Studio",
    guests: 2,
    wifi: true,
    reviews: 95,
    price: 120,
  },
  {
    city: "Dubai",
    image:
      "https://images.unsplash.com/photo-1584974419724-b3a7f94d3a2e",
    type: "Luxury Villa",
    guests: 6,
    wifi: true,
    reviews: 210,
    price: 300,
  },
  {
    city: "Cape Town",
    image:
      "https://images.unsplash.com/photo-1570813591759-164d4a4dbe27",
    type: "House",
    guests: 5,
    wifi: true,
    reviews: 80,
    price: 180,
  },
  {
    city: "Paris",
    image:
      "https://images.unsplash.com/photo-1522091750242-647918d8c49b",
    type: "Penthouse",
    guests: 3,
    wifi: true,
    reviews: 150,
    price: 250,
  },
];

const LocationPage = () => {
  return (
    <div>
      <div className="loc-nav">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png?20230603231949"
            alt="Airbnb logo"
            className="login-image"
          />
        </Link>
        <SearchNavbar />
      </div>

      <div className="loc-container">
        <h1>All Locations</h1>
        <div className="location-list">
          {locations.map((loc, index) => (
            <div key={index} className="location-card">
              <img src={loc.image} alt={loc.city} className="location-img" />
              <div className="location-details">
                <h3>{loc.type}</h3>
                <p>{loc.city}</p>
                <p>Guests: {loc.guests}</p>
                <p>{loc.wifi ? "✅ Free WiFi" : "❌ No WiFi"}</p>
                <p>Reviews: {loc.reviews}</p>
                <p className="price">${loc.price} / night</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
