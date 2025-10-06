import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const ProtectedRoute = ({ children }) => {
  const { user, loadingCheck } = useContext(UserContext);

  // While checking login status, show nothing or a loader
  if (loadingCheck) return <p>Loading...</p>;

  // If user is not logged in, redirect to landing page (/)
  if (!user) return <Navigate to="/" />;

  // User is logged in, render children
  return children;
};

export default ProtectedRoute;
