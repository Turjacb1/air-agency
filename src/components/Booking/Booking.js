// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios"; // For making API calls
// import "./Booking.css";

// const Booking = () => {
//   const location = useLocation();
//   const { flightId, airlineName, date, ticketCount, totalPrice, seatClass, ticketType, returnDate } = location.state || {};

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // Generate random captcha
//   function generateCaptcha() {
//     return Math.random().toString(36).substring(2, 7).toUpperCase();
//   }

//   // Handle booking submission
//   const handleBooking = async (e) => {
//     e.preventDefault();

//     if (!name || !email) {
//       setErrorMessage("Please fill out all fields.");
//       return;
//     }
//     if (captchaInput.toUpperCase() !== captcha) {
//       setErrorMessage("Captcha does not match. Please try again.");
//       return;
//     }

//     // Prepare booking data
//     const bookingData = {
//       flightId,
//       airlineName,
//       date,
//       returnDate,
//       ticketCount,
//       totalPrice,
//       seatClass,
//       ticketType,
//       name,
//       email
//     };

//     try {
//       // Send data to backend (Express.js server)
//       await axios.post('http://localhost:5000/api/bookings', bookingData);
//       setErrorMessage("");
//       setSuccessMessage("Booking confirmed! Check your email for details.");
//       setName("");
//       setEmail("");
//       setCaptchaInput("");
//       setCaptcha(generateCaptcha());
//     } catch (error) {
//       setErrorMessage("Failed to submit booking.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="booking-container">
//       <h2>Flight Booking</h2>
//       {flightId ? (
//         <div>
//           <div className="booking-details">
//             <p><strong>Flight ID:</strong> {flightId}</p>
//             <p><strong>Airline:</strong> {airlineName}</p>
//             <p><strong>Date:</strong> {date}</p>
//             {returnDate && <p><strong>Return Date:</strong> {returnDate}</p>}
//             <p><strong>Number of Tickets:</strong> {ticketCount}</p>
//             <p><strong>Seat Class:</strong> {seatClass}</p>
//             <p><strong>Ticket Type:</strong> {ticketType}</p>
//             <p><strong>Total Price:</strong> {totalPrice.toFixed(2)} USD</p>
//           </div>

//           {/* Success Message */}
//           {successMessage && (
//             <div className="success-message">
//               <p className="success-text">{successMessage}</p>
//             </div>
//           )}

//           <form className="booking-form" onSubmit={handleBooking}>
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="captcha">Captcha: <strong>{captcha}</strong></label>
//               <input
//                 type="text"
//                 id="captcha"
//                 value={captchaInput}
//                 onChange={(e) => setCaptchaInput(e.target.value)}
//                 placeholder="Enter captcha"
//                 required
//               />
//             </div>

//             {errorMessage && <p className="error-message">{errorMessage}</p>}

//             <button type="submit" className="btn-primary">Book Now</button>
//           </form>
//         </div>
//       ) : (
//         <p className="no-details">No booking details available.</p>
//       )}
//     </div>
//   );
// };

// export default Booking;




import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"; 
import "./Booking.css";
import Payment from "../PaymentForm/Payment";

const Booking = () => {
  const location = useLocation();
  const { flightId, airlineName, date, flightTime, ticketCount, totalPrice, seatClass, ticketType, returnDate } = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPayment, setShowPayment] = useState(false); 

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
  }

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
    if (captchaInput.toUpperCase() !== captcha) {
      setErrorMessage("Captcha does not match. Please try again.");
      return;
    }

    const bookingData = {
      flightId,
      airlineName,
      date,
      flightTime, // Added time data here
      returnDate,
      ticketCount,
      totalPrice,
      seatClass,
      ticketType,
      name,
      email,
    };

    try {
      await axios.post("http://localhost:5000/api/bookings", bookingData);
      setErrorMessage("");
      setSuccessMessage("Booking confirmed! Proceed to payment.");
      setShowPayment(true); 
    } catch (error) {
      setErrorMessage("Failed to submit booking.");
      console.error(error);
    }
  };

  return (
    <div className="booking-container">
      {!showPayment ? (
        <>
          <h2>Flight Booking</h2>
          {flightId ? (
            <div>
              <div className="booking-details">
                <p><strong>Flight ID:</strong> {flightId}</p>
                <p><strong>Airline:</strong> {airlineName}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {flightTime}</p> {/* Displaying time */}
                {returnDate && <p><strong>Return Date:</strong> {returnDate}</p>}
                <p><strong>Number of Tickets:</strong> {ticketCount}</p>
                <p><strong>Seat Class:</strong> {seatClass}</p>
                <p><strong>Ticket Type:</strong> {ticketType}</p>
                <p><strong>Total Price:</strong> {totalPrice.toFixed(2)} USD</p>
              </div>

              {successMessage && (
                <div className="success-message">
                  <p className="success-text">{successMessage}</p>
                </div>
              )}

              <form className="booking-form" onSubmit={handleBooking}>
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

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit" className="btn-primary">Book Now</button>
              </form>
            </div>
          ) : (
            <p className="no-details">No booking details available.</p>
          )}
        </>
      ) : (
        <Payment totalPrice={totalPrice} /> 
      )}
    </div>
  );
};

export default Booking;
