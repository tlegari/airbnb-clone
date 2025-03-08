import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../redux/slices/accommodationSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.accommodation.listings);

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {listings.map((listing) => (
        <div key={listing._id}>
          <h3>{listing.title}</h3>
          <p>{listing.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
