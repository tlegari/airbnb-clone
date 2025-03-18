import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyReservation.css";
import Header from "../TopHeader/Header";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/reservations");
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/reservations/${id}`);
      setReservations(reservations.filter((res) => res._id !== id));
      alert("Reservation deleted!");
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  return (
    <div>
        <Header />
       <div className="reservations-container">
      <h2 className="reservations-title">My Reservations</h2>
      <table className="reservations-table">
        <thead>
          <tr>
            <th>City</th>
            <th>Type</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.length > 0 ? (
            reservations.map((res) => (
              <tr key={res._id}>
                <td>{res.city}</td>
                <td>{res.type}</td>
                <td>{new Date(res.checkInDate).toDateString()}</td>
                <td>{new Date(res.checkOutDate).toDateString()}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(res._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No reservations found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
    
  );
};

export default MyReservations;
