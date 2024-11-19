// components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Replace with actual authentication logic
  return localStorage.getItem("isAuthenticated");
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
