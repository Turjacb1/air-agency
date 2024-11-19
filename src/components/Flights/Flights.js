import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import "./Flights.css";

const Flights = () => {
  const [flights, setFlights] = useState([
    // Same flight data...
    {
      id: 1,
      departure: "New York",
      destination: "London",
      airlines: [
        { name: "Emirates", price: 450, remainingTickets: 10 },
        { name: "Qatar Airways", price: 475, remainingTickets: 8 },
        { name: "Delta Airlines", price: 500, remainingTickets: 12 },
        { name: "Air India", price: 470, remainingTickets: 15 },
      ],
      type: "International",
    },{
        id: 2,
        departure: "Dhaka",
        destination: "Kolkata",
        airlines: [
          { name: "Emirates", price: 450, remainingTickets: 10 },
          { name: "Qatar Airways", price: 475, remainingTickets: 8 },
          { name: "Delta Airlines", price: 500, remainingTickets: 12 },
          { name: "Air India", price: 470, remainingTickets: 15 },
        ],
        type: "International",
      },
      {
        id: 3,
        departure: "Dhaka",
        destination: "Germany",
        airlines: [
          { name: "Emirates", price: 450, remainingTickets: 10 },
          { name: "Qatar Airways", price: 475, remainingTickets: 8 },
          { name: "Delta Airlines", price: 500, remainingTickets: 12 },
          { name: "Air India", price: 470, remainingTickets: 15 },
        ],
        type: "International",
      },
    {
      id: 4,
      departure: "New York",
      destination: "Boston",
      airlines: [
        { name: "Emirates", price: 150, remainingTickets: 20 },
        { name: "Qatar Airways", price: 160, remainingTickets: 18 },
        { name: "Delta Airlines", price: 170, remainingTickets: 22 },
        { name: "Air India", price: 155, remainingTickets: 25 },
      ],
      type: "Domestic",
    },
    {
        id: 5,
        departure: "Dhaka",
        destination: "Chttagram",
        airlines: [
          { name: "Emirates", price: 150, remainingTickets: 20 },
          { name: "Qatar Airways", price: 160, remainingTickets: 18 },
          { name: "Delta Airlines", price: 170, remainingTickets: 22 },
          { name: "Air India", price: 155, remainingTickets: 25 },
        ],
        type: "Domestic",
      },
      {
        id: 6,
        departure: "Dhaka",
        destination: "Sylhet",
        airlines: [
          { name: "Emirates", price: 150, remainingTickets: 20 },
          { name: "Qatar Airways", price: 160, remainingTickets: 18 },
          { name: "Delta Airlines", price: 170, remainingTickets: 22 },
          { name: "Air India", price: 155, remainingTickets: 25 },
        ],
        type: "Domestic",
      }
  ]);

  const [flightType, setFlightType] = useState("Domestic");
  const [selectedAirline, setSelectedAirline] = useState(null);
  const [selectedSeatClass, setSelectedSeatClass] = useState(null);
  const [ticketType, setTicketType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null); // For Round Trip
  const [ticketCount, setTicketCount] = useState(1);
  const [tripType, setTripType] = useState("One-way"); // New state for Trip Type (One-way / Round trip)

  const navigate = useNavigate();

  const filteredFlights = flights.filter((flight) => flight.type === flightType);

  const calculatePrice = (basePrice) => {
    let adjustedPrice = basePrice;

    if (selectedSeatClass === "Business") adjustedPrice *= 1.5;
    if (selectedSeatClass === "First Class") adjustedPrice *= 2;
    if (ticketType === "Student") adjustedPrice *= 0.8;

    // Double price for Round Trip
    if (tripType === "Round trip") adjustedPrice *= 2;

    return adjustedPrice;
  };

  const handleBookNow = (flightId, airlineName) => {
    if (selectedDate) {
      const airline = flights
        .find((flight) => flight.id === flightId)
        .airlines.find((airline) => airline.name === airlineName);

      const flightDetails = {
        flightId,
        airlineName,
        seatClass: selectedSeatClass,
        ticketType,
        date: selectedDate.toDateString(),
        returnDate: tripType === "Round trip" ? returnDate?.toDateString() : null, // Store return date for Round trip
        ticketCount,
        totalPrice: calculatePrice(airline.price) * ticketCount,
      };

      const updatedFlights = flights.map((flight) => {
        if (flight.id === flightId) {
          return {
            ...flight,
            airlines: flight.airlines.map((airline) =>
              airline.name === airlineName
                ? { ...airline, remainingTickets: airline.remainingTickets - ticketCount }
                : airline
            ),
          };
        }
        return flight;
      });

      setFlights(updatedFlights);
      navigate("/booking", { state: flightDetails });
    } else {
      alert("Please select a date for your flight.");
    }
  };

  return (
    <div className="flights">
      <h2>Available Flights</h2>

      <div className="flight-type-selector">
        <label>
          <input
            type="radio"
            name="flightType"
            value="Domestic"
            checked={flightType === "Domestic"}
            onChange={() => setFlightType("Domestic")}
          />
          Domestic
        </label>
        <label>
          <input
            type="radio"
            name="flightType"
            value="International"
            checked={flightType === "International"}
            onChange={() => setFlightType("International")}
          />
          International
        </label>
      </div>

      {/* Trip Type Selector */}
      {/* Trip Type Selector */}
<div className="trip-type-selector">
  <label>
    <input
      type="radio"
      name="tripType"
      value="One-way"
      checked={tripType === "One-way"}
      onChange={() => setTripType("One-way")}
    />
    One-way
  </label>
  <label>
    <input
      type="radio"
      name="tripType"
      value="Round trip"
      checked={tripType === "Round trip"}
      onChange={() => setTripType("Round trip")}
    />
    Round trip
  </label>
</div>


      <ul>
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <li key={flight.id}>
              <div className="flight-info">
                <p>
                  <strong>From:</strong> {flight.departure}
                </p>
                <p>
                  <strong>To:</strong> {flight.destination}
                </p>

                <div className="airline-options">
                  {flight.airlines.map((airline, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name={`airline-${flight.id}`}
                        value={airline.name}
                        checked={selectedAirline === airline.name}
                        onChange={() => setSelectedAirline(airline.name)}
                        disabled={airline.remainingTickets <= 0}
                      />
                      {airline.name} ({airline.remainingTickets} tickets left)
                    </label>
                  ))}
                </div>

                {selectedAirline && (
                  <div className="seat-class-options">
                    <p>
                      <strong>Select Seat Class:</strong>
                    </p>
                    <div className="seat-class-options">
                      {["Economy", "Business", "First Class"].map((seatClass) => (
                        <label key={seatClass}>
                          <input
                            type="radio"
                            name="seatClass"
                            value={seatClass}
                            checked={selectedSeatClass === seatClass}
                            onChange={() => setSelectedSeatClass(seatClass)}
                          />
                          {seatClass}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {selectedSeatClass && (
                  <div className="ticket-type-options">
                    <p>
                      <strong>Ticket Type:</strong>
                    </p>
                    <div className="ticket-type-row">
                      {["Regular", "Student"].map((type) => (
                        <label key={type}>
                          <input
                            type="radio"
                            name="ticketType"
                            value={type}
                            checked={ticketType === type}
                            onChange={() => setTicketType(type)}
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {ticketType && (
                  <>
                    <p>
                      <strong>Price per Ticket:</strong>{" "}
                      {calculatePrice(
                        flight.airlines.find((airline) => airline.name === selectedAirline).price
                      ).toFixed(2)}{" "}
                      USD
                    </p>
                    <div>
                      <label>
                        <strong>Number of Tickets:</strong>
                        <input
                          type="number"
                          min="1"
                          max={
                            flight.airlines.find((airline) => airline.name === selectedAirline)
                              .remainingTickets
                          }
                          value={ticketCount}
                          onChange={(e) => setTicketCount(Number(e.target.value))}
                          style={{ width: "60px", marginLeft: "10px" }}
                        />
                      </label>
                    </div>
                    <p>
                      <strong>Total Price:</strong>{" "}
                      {(
                        calculatePrice(
                          flight.airlines.find((airline) => airline.name === selectedAirline).price
                        ) * ticketCount
                      ).toFixed(2)}{" "}
                      USD
                    </p>
                  </>
                )}

                <div>
                  <p>
                    <strong>Select Date:</strong>
                  </p>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    minDate={new Date()}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select a date"
                  />
                </div>

                {tripType === "Round trip" && (
                  <div>
                    <p>
                      <strong>Select Return Date:</strong>
                    </p>
                    <DatePicker
                      selected={returnDate}
                      onChange={(date) => setReturnDate(date)}
                      minDate={selectedDate ? selectedDate : new Date()}
                      dateFormat="MMMM d, yyyy"
                      placeholderText="Select return date"
                    />
                  </div>
                )}

                <button
                  onClick={() => handleBookNow(flight.id, selectedAirline)}
                  className="book-now-btn"
                  disabled={
                    !selectedAirline ||
                    !selectedDate ||
                    ticketCount >
                      flight.airlines.find((airline) => airline.name === selectedAirline)
                        .remainingTickets
                  }
                >
                  Book Now
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No flights available for the selected type.</p>
        )}
      </ul>
    </div>
  );
};

export default Flights;
