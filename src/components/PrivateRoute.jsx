import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; // অথবা স্পিনার দেখাতে পারো
  }

  if (!user) {
    // ইউজার লগইন না থাকলে লগইন পেজে পাঠাবে, এবং যেখানে যেতে চেয়েছিল সেখান থেকে ফেরাতে location state দেয়
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ইউজার থাকলে children রেন্ডার করবে
  return children;
};

export default PrivateRoute;
