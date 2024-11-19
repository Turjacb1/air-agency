import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>

      {/* Email with Icon */}
      <p className="contact-info">
        <FaEnvelope className="contact-icon" /> Email: support@airtravel.com
      </p>

      {/* Phone with Icon */}
      <p className="contact-info">
        <FaPhoneAlt className="contact-icon" /> Phone: +1 234 567 890
      </p>

      {/* Address with Icon */}
      <p className="contact-info">
        <FaMapMarkerAlt className="contact-icon" /> Address: 123 Main Street, City, Country
      </p>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaYoutube />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;
