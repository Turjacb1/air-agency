// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./App.css";
// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import Flights from "./components/Flights/Flights";
// import Booking from "./components/Booking/Booking";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import Login from "./components/Login/Login";

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/flights" element={<Flights />} />
//           <Route path="/booking" element={<Booking />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Flights from "./components/Flights/Flights";
import Booking from "./components/Booking/Booking";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";

import Payment from "./components/PaymentForm/Payment";


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flights" element={<PrivateRoute element={<Flights />} />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Payment/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
