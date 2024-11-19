import React from "react";
import "./Home.css";
import air from '../../image/air.jpg';
import FlightOptions from "./FlightOptions/FlightOptions";
import PopularAirlines from "./PopularAirlines/PopularAirlines";
import DestinationOptions from "./DestinationOptions/DestinationOptions";  // Import the DestinationOptions component
import FlightStats from "./FlightStats/FlightStats"; // Import the FlightStats component

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay">
          <h1>Welcome to AirTravel</h1>
          <img src={air} alt="Air Travel" className="" />
          <p>Plan your journey with ease and find amazing deals!</p>
        </div>
      </div>

      {/* Flight Options Section */}
      <div className="flight-options-container">
        <h2>Plan Your Trip</h2>
        <FlightOptions />
      </div>

      {/* Popular Airlines Section */}
      <div className="popular-airlines-container">
        <PopularAirlines />
      </div>

 {/* Flight Stats Section */}
 <div className="flight-stats-container">
        <FlightStats /> {/* Add FlightStats component */}
      </div>

      {/* Destination Options Section */}
      <div className="destination-options-container">
        <DestinationOptions />  {/* Add DestinationOptions component */}
      </div>

     
    </div>
  );
};

export default Home;
