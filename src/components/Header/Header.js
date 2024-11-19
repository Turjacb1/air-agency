// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <h1>AirTravel</h1>
//       </div>
//       <nav className="nav">
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/flights">Flights</Link></li>
//           <li><Link to="/booking">Booking</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./Header.css";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication state on component mount
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setIsAuthenticated(!!user); // Set true if user exists
    });
    return () => unsubscribe();
  }, []);

  // Handle Sign Out
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("isAuthenticated");
        navigate("/"); // Redirect to home page after sign out
      })
      .catch((error) => {
        console.error("Sign Out error:", error.message);
      });
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>AirTravel</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/flights">Flights</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <button className="btn-signout" onClick={handleSignOut}>
                Sign Out
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
