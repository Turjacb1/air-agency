import React, { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUser, FaChair } from "react-icons/fa";
import { GiPassenger } from "react-icons/gi";
import "./FlightOptions.css";

const FlightOptions = () => {
  const [tripType, setTripType] = useState("oneWay");
  const [travelers, setTravelers] = useState(1);
  const [seatClass, setSeatClass] = useState("economy");
  const [passengerType, setPassengerType] = useState("regular");

  return (
    <div className="flight-options">
      <h2>Book Your Flight</h2>

      <div className="form-row">
        {/* Trip Type Options */}
        <div className="form-group">
          <label>
            <FaPlaneDeparture className="icon" /> Trip Type:
          </label>
          <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
            <option value="oneWay">One Way</option>
            <option value="roundTrip">Round Trip</option>
            <option value="multiWay">Multi-City</option>
          </select>
        </div>

        {/* From Field */}
        <div className="form-group">
          <label>
            <FaPlaneDeparture className="icon" /> From:
          </label>
          <input type="text" placeholder="Enter departure location" />
        </div>
      </div>

      <div className="form-row">
        {/* To Field */}
        <div className="form-group">
          <label>
            <FaPlaneArrival className="icon" /> To:
          </label>
          <input type="text" placeholder="Enter destination" />
        </div>

        {/* Date Input */}
        <div className="form-group">
          <label>
            <FaCalendarAlt className="icon" /> Date:
          </label>
          <input type="date" />
        </div>
      </div>

      <div className="form-row">
        {/* Travelers */}
        <div className="form-group">
          <label>
            <FaUser className="icon" /> Travelers:
          </label>
          <input
            type="number"
            min="1"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
          />
        </div>

        {/* Seat Class */}
        <div className="form-group">
          <label>
            <FaChair className="icon" /> Seat Class:
          </label>
          <select value={seatClass} onChange={(e) => setSeatClass(e.target.value)}>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="firstClass">First Class</option>
            <option value="premiumEconomy">Premium Economy</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        {/* Passenger Type */}
        <div className="form-group">
          <label>
            
          </label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="passengerType"
                value="regular"
                checked={passengerType === "regular"}
                onChange={() => setPassengerType("regular")}
              />
              Regular
            </label>
            <label>
              <input
                type="radio"
                name="passengerType"
                value="student"
                checked={passengerType === "student"}
                onChange={() => setPassengerType("student")}
              />
              Student
            </label>
          </div>
        </div>
      </div>

      <button className="search-btn">
        <FaPlaneDeparture className="icon" /> Search Flights
      </button>
    </div>
  );
};

export default FlightOptions;
