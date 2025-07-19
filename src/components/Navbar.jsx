import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navLink = "px-3 py-2 font-medium";
  const activeClass = "text-blue-600 underline";

  return (
    <nav className="bg-gray-100 shadow-md px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">📱 AppStore</Link>

      <div className="flex gap-4">
        <NavLink to="/" className={({ isActive }) => `${navLink} ${isActive ? activeClass : ""}`}>Apps</NavLink>
        {user && (
          <NavLink to="/profile" className={({ isActive }) => `${navLink} ${isActive ? activeClass : ""}`}>My Profile</NavLink>
        )}
      </div>

      <div>
        {user ? (
          <div className="flex items-center gap-2">
            <img src={user?.photoURL} alt="User" className="w-8 h-8 rounded-full" title={user.displayName} />
            <button onClick={logout} className="text-red-600 font-semibold">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="text-blue-600 font-semibold">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
