import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Media Center</li>
            <li>Our planet</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>Help and Contact</li>
            <li>Travel Updates</li>
            <li>Special Assistance</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Book</h3>
          <ul>
            <li>Book flights</li>
            <li>Travel services</li>
            <li>Transportation</li>
            <li>Plan your trip</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Manage</h3>
          <ul>
            <li>Check-in</li>
            <li>Manage Booking</li>
            <li>Flight status</li>
            <li>Baggage info</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Before You Fly</h3>
          <ul>
            <li>Baggage</li>
            <li>Visa and passport information</li>
            <li>Health</li>
            <li>Travel information</li>
            <li>Dubai International</li>
            <li>Getting to and from the airport</li>
            <li>Rules and notices</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Where We Fly</h3>
          <ul>
            <li>Route map</li>
            <li>Africa</li>
            <li>Asia and the Pacific</li>
            <li>Europe</li>
            <li>The Americas</li>
            <li>The Middle East</li>
            <li>Flights to all countries/territories</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Experience</h3>
          <ul>
            <li>Cabin features</li>
            <li>Shop Emirates</li>
            <li>What's on your flight</li>
            <li>Inflight entertainment</li>
            <li>Dining</li>
            <li>Our lounges</li>
            <li>Dubai Stopover</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Loyalty</h3>
          <ul>
            <li>Log in to Emirates Skywards</li>
            <li>Join Emirates Skywards</li>
            <li>Our partners</li>
            <li>Business Rewards benefits</li>
            <li>Register your company</li>
            <li>Emirates Skywards Program Rules</li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">&copy; 2024 AirTravel Agency. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
