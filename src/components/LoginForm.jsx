import React, { useState, useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);

      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow hover:shadow-amber-400 shadow-xl bg-cyan-950">
      <h2 className="text-2xl font-bold text-center text-white">Login</h2>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold text-white">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-amber-500 p-2 w-full mb-4"
        />
        <label className="block mb-2 font-semibold text-white">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-amber-500 p-2 w-full mb-4"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Login
        </button>
      </form>
      <p className="mt-3 text-sm text-white">
        Don't have an account?{" "}
        <Link to="/register" className="text-white underline hover:text-pink-500">Register</Link>
      </p>
    </div>
  );
};

export default LoginForm;
