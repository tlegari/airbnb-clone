import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../redux/slices/accommodationSlice";
import SearchNavbar from "../TopHeader/SearchNavbar";
import { Link } from "react-router-dom";
import "./LocationPage.css";

const LocationPage = () => {
  const dispatch = useDispatch();
  const { listings, loading } = useSelector((state) => state.accommodation);

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

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

        {loading ? (
          <p>Loading accommodations...</p>
        ) : (
          <div className="location-list">
            {listings.map((loc) => (
              <div key={loc._id} className="location-card">
                <img src={loc.image} alt={loc.city} className="location-img" />
                <div className="location-details">
                 <Link to={`/location/${loc._id}`}><h3>{loc.city}</h3></Link> 
                  <p>{loc.type}</p>
                  <p>Guests: {loc.guests}</p>
                  <p>{loc.wifi ? "✅ Free WiFi" : "❌ No WiFi"}</p>
                  <p>Reviews: {loc.reviews}</p>
                  <p className="price">${loc.price} / night</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationPage;
