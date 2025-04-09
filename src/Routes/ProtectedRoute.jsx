import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Check user role from localStorage or context
const ProtectedRoute = ({ allowedRole }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userRole = localStorage.getItem("role"); // "admin" or "user"

  if (!isAuthenticated) {
    // Redirect unauthenticated users
    return <Navigate to={allowedRole === "admin" ? "/admin" : "/login"} replace />;
  }

  if (allowedRole && userRole !== allowedRole) {
    // Redirect wrong-role users to login or a 403 page
    return <Navigate to={userRole === "admin" ? "/admin/app/dashboard" : "/app/home"} replace />;
  }

  return <Outlet />; // Render nested routes
};

export default ProtectedRoute;
