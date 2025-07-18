import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // ✅ এখানে hook টি ব্যবহার করতে হবে

  return (
    <nav className="">
      {user ? (
        <div className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="text-xl font-bold">My AppStore</h1>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <span className="text-sm font-medium">
            Hi, {user.displayName || "User"}
          </span>
          <Link to="/profile" className="text-blue-600 hover:underline">
            Profile
          </Link>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-3">
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
