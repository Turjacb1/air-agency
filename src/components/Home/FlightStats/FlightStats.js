import React from 'react';
import { FaPlaneDeparture, FaPlane, FaClock } from 'react-icons/fa'; // Importing relevant icons
import './FlightStats.css';

const FlightStats = () => {
  const internationalFlights = 50;
  const domesticFlights = 20;
  const onTimePerformance = 87.5;

  return (
    <div className="flight-stats-wrapper">
      <header className="flight-stats-header">
        <h1>Biman at a Glance</h1>
        <p>From Takeoff to Landing: A closer look at our operations</p>
      </header>
      <div className="flight-stats-container">
        <div className="stat-card">
          <FaPlaneDeparture className="stat-icon" /> {/* Icon added */}
          <h3 className="stat-title">International Flights</h3>
          <p className="stat-amount">{internationalFlights}</p>
          <p className="stat-description">Flights to international destinations</p>
        </div>

        <div className="stat-card">
          <FaPlane className="stat-icon" /> {/* Icon added */}
          <h3 className="stat-title">Domestic Flights</h3>
          <p className="stat-amount">{domesticFlights}</p>
          <p className="stat-description">Flights to domestic destinations</p>
        </div>

        <div className="stat-card">
          <FaClock className="stat-icon" /> {/* Icon added */}
          <h3 className="stat-title">On-Time Performance</h3>
          <p className="stat-amount">{onTimePerformance}%</p>
          <p className="stat-description">Percentage of on-time flights</p>
        </div>
      </div>
    </div>
  );
};

export default FlightStats;
