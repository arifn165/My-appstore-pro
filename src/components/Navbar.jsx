import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navLink = "px-3 py-2 font-medium";
  const activeClass = "text-blue-600 underline";

  return (
    <nav className="bg-gray-900 shadow-md px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white">📱 AppStore</Link>

      <div className="flex gap-4">
        <NavLink to="/" className={({ isActive }) => `${navLink} ${isActive ? activeClass : ""} text-white`}>Apps</NavLink>
        {user && (
          <NavLink to="/profile" className={({ isActive }) => `${navLink} ${isActive ? activeClass : ""} text-white`}>My Profile</NavLink>
        )}
      </div>

      <div>
        {user ? (
          <div className="flex items-center gap-2">
            <span className="font-extrabold bg-amber-600 border p-3 rounded-3xl text-white text-2xl hover:bg-pink-500">{user.displayName}</span>
            <button onClick={logout} className="text-white font-semibold text-xl hover: underline">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="text-white font-semibold hover:underline">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
