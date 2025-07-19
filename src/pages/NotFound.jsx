// src/pages/NotFound.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found | AppStore";
  }, []);

  return (
    <div className="text-center mt-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
