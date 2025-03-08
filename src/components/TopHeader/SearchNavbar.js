import React from 'react';
import './SearchNavbar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'



const SearchNavbar = () => {
  const navigate = useNavigate();
  const handleLocationChange = (e) => {
    if(e.target.value === 'all_locations'){
     navigate('/all_locations')
    }
 };
 

  return (
    <div className="header-center">
      <div className="search-option">
        <label htmlFor="hotels">Locations</label>
        <select id="hotels" onChange={handleLocationChange}>
          <option value="select">Select Location</option>
          <option value="all_locations">All Locations</option>
          <option value="new_york">New York</option>
          <option value="london">London</option>
          <option value="dubi">Dubi</option>
          <option value="cape_town">Cape town</option>
          <option value="paris">Paris</option>
        </select>
      </div>

      <div className="search-option">
        <label htmlFor="checkin">Check-in</label>
        <input type="date" id="checkin" />
      </div>

      <div className="search-option">
        <label htmlFor="checkout">Check-out</label>
        <input type="date" id="checkout" />
      </div>

      <div className="search-option">
        <label htmlFor="guests">Guests</label>
        <input type="number" id="guests" placeholder="Add Guests" min="1" />
      </div>

      <button className="search-button">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchNavbar;
