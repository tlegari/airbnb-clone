import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccommodationById } from "../../redux/slices/accommodationSlice";
import axios from "axios";
import "./LocationDetails.css";
import TopHeader from "../TopHeader/TopHeader";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUserCircle } from "react-icons/fa";
import Header from "../TopHeader/Header";
import Footer from "../Footer/Footer";

const LocationDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedListing: location, loading } = useSelector((state) => state.accommodation);
  console.log("Fetched location data:", location);


  // State for check-in, check-out, guests, and calendar dates
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [dates, setDates] = useState([null, null]);
  const [isReserved, setIsReserved] = useState(false);

  useEffect(() => {
    dispatch(fetchAccommodationById(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;

  const handleReservation = async () => {
    if(!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }

    const reservationData = {
      accommodationId: id,
      city: location?.city,
      type: location?.type,
      checkInDate: checkInDate.toISOString(),
      checkOutDate: checkOutDate.toISOString(),
      guests,
    };

    try {
      await axios.post("http://localhost:5000/api/reservations", reservationData);
      setIsReserved(true);
      alert("Reservation successful");
    } catch (error) {
      console.error("Error making reservation:", error);
      alert("Failed to reserve. Try again")
    }
  };


  // Calculate number of nights
  const checkInDate = dates[0];
  const checkOutDate = dates[1];
  const nights = checkInDate && checkOutDate ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)) : 0;

  const testimonials = [
    { name: "Alice Johnson", city: "New York", rating: 5, review: "Amazing place! Super clean and well-located." },
    { name: "Michael Brown", city: "Los Angeles", rating: 4, review: "Loved the ambiance and the host was very accommodating." },
    { name: "Sophia Davis", city: "Chicago", rating: 5, review: "A cozy spot that felt like home away from home." },
    { name: "James Wilson", city: "Miami", rating: 5, review: "Great experience! Will definitely book again." },
    { name: "Olivia Martinez", city: "San Francisco", rating: 4, review: "Nice place, just a little noisy at night." },
    { name: "Liam Taylor", city: "Seattle", rating: 5, review: "Fantastic stay! Everything was perfect." }
  ];

  return (
    <>
      <Header />
      <div className="details-container">
        <h1>{location?.type} in {location?.city}</h1>
        <h2>Perfect Stay for {location?.guests} Guests</h2>
        <p>⭐ {location?.reviews} Reviews • {location?.city}</p>

        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image">
            <img src={location?.image} alt={location?.city} />
          </div>
          <div className="side-images">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-52424984/original/22c74cb3-7625-4707-ab0b-b28dcbf3c9fc.jpeg?im_w=720" alt="1" />
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-52424984/original/c879687d-3b48-4db0-8128-d3e9fba9f79c.jpeg?im_w=720" alt="2" />
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-52424984/original/4c4bd85d-a60f-497c-aa70-dff8cf139da4.jpeg?im_w=720" alt="3" />
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-52424984/original/be4cf25a-3708-480c-b15d-b10827b12a9a.jpeg?im_w=720" alt="4" />
          </div>
        </div>

        <div className="middle-container">
          {/* Two Column Layout */}
        <div className="details-content">
          {/* Left Column */}
          <div className="accommodation-info">
            <h3>Accommodation Details</h3>
            <p>Type: {location?.type}</p>
            <p>Guests: {location?.guests}</p>
            <p>{location?.wifi ? "✅ Free WiFi" : "❌ No WiFi"}</p>
            <p>Price: ${location?.price} / night</p>
          </div>

          {/* Right Column - Cost Calculator */}
          <div className="cost-calculator">
            <h3>Price Breakdown</h3>
            <p>Cost per night: ${location?.price}</p>

            {/* Booking Form */}
            <div className="booking-form">
              <input type="date" className="date-picker" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} placeholder="Check-in" />
              <input type="date" className="date-picker" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} placeholder="Check-out" />

              <div className="guest-counter">
                <span>Guests: {guests}</span>
                <button className="counter-btn" onClick={() => setGuests(Math.max(1, guests - 1))}>-</button>
                <button className="counter-btn" onClick={() => setGuests(guests + 1)}>+</button>
              </div>
            </div>

            <hr />
            <h4>Total: ${location?.price * nights}</h4>

            <button onClick={handleReservation} disabled={isReserved} className="reserve-btn">
              {isReserved ? "Reserved" : "Reserve"}
            </button>

            <button className="reserve-btn" onClick={() => navigate("/my-reservations")}>
            View My Reservations
          </button>
          </div>

        </div>
        </div>

        

        {/* Right Column - Booking Calendar & Cost Breakdown */}
        <div className="cost-calculator">
            <h3>Price Breakdown</h3>
            <p>Cost per night: ${location?.price}</p>

            {/* Number of nights */}
            <h4>{nights > 0 ? `${nights} Night(s)` : "Select Dates"}</h4>

            {/* Calendar for selecting dates */}
            <Calendar
              selectRange
              onChange={setDates}
              value={dates}
              minDate={new Date()}
            />

            {/* Display selected check-in and check-out dates */}
            <div className="selected-dates">
              <p>Check-in: {checkInDate ? checkInDate.toDateString() : "Select date"}</p>
              <p>Check-out: {checkOutDate ? checkOutDate.toDateString() : "Select date"}</p>
            </div>
          </div>


        <div className="testimonials">
          <h3>Reviews and Testimonials</h3>
          {testimonials.map((testimony, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial-header">
                <FaUserCircle className="user-icon" />
                <div>
                  <p className="user-name">{testimony.name}</p>
                  <p className="user-city">{testimony.city}</p>
                </div>
              </div>
              <p className="user-review">{testimony.review}</p>
              <p className="user-rating">⭐ {testimony.rating} Stars</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LocationDetails;
