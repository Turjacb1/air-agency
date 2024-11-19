import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  const location = useLocation();
  const { flightId, airlineName, date, ticketCount, totalPrice, seatClass, ticketType } = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [errorMessage, setErrorMessage] = useState("");

  // Generate random captcha
  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
  }

  // Handle booking submission
  const handleBooking = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
    if (captchaInput.toUpperCase() !== captcha) {
      setErrorMessage("Captcha does not match. Please try again.");
      return;
    }

    setErrorMessage("");
    alert("Booking confirmed! Check your email for details.");
    setName("");
    setEmail("");
    setCaptchaInput("");
    setCaptcha(generateCaptcha());
  };

  return (
    <div className="booking-container">
      <h2>Flight Booking</h2>
      {flightId ? (
        <div>
          <div className="booking-details">
            <p><strong>Flight ID:</strong> {flightId}</p>
            <p><strong>Airline:</strong> {airlineName}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Number of Tickets:</strong> {ticketCount}</p>
            <p><strong>Seat Class:</strong> {seatClass}</p>
            <p><strong>Ticket Type:</strong> {ticketType}</p>
            <p><strong>Total Price:</strong> {totalPrice.toFixed(2)} USD</p>
          </div>

          <form className="booking-form" onSubmit={handleBooking}>
            {/* Name input */}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email input */}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Captcha */}
            <div className="form-group">
              <label htmlFor="captcha">Captcha: <strong>{captcha}</strong></label>
              <input
                type="text"
                id="captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Enter captcha"
                required
              />
            </div>

            {/* Error message */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {/* Submit button */}
            <button type="submit" className="btn-primary">
              Book Now
            </button>
          </form>
        </div>
      ) : (
        <p className="no-details">No booking details available.</p>
      )}
    </div>
  );
};

export default Booking;
