import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(email, password);
      alert("Registration Successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow rounded-2xl hover:shadow-amber-400 shadow-xl bg-cyan-950">
      <h2 className="text-2xl font-bold mb-5 text-white text-center">
        Register
      </h2>
      {error && <p className="text-red-600 mb-3">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold text-white">
          Username :
        </label>
        <input
          type="username"
          placeholder="Type Your Username :"
          className="border border-amber-400 p-2 w-full mb-4 text-white"
        />
        <label className="block mb-2 font-semibold text-white">Email :</label>
        <input
          type="email"
          required
          value={email}
          placeholder="Type Your Valide Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border border-amber-400 p-2 w-full mb-4 text-white"
        />

        <label className="block mb-2 font-semibold text-white">
          Password :
        </label>
        <input
          type="password"
          required
          value={password}
          placeholder="Type Your Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border border-amber-400 p-2 w-full mb-4 text-white"
        />
        <div>
          <label className="block mb-2 font-semibold text-white">
            Confirm Password :
          </label>
          <input
            type="Password"
            required
            value={confirmpassword}
            placeholder="Type Must Same As Password :"
            onChange={(e) => setconfirmpassword(e.target.value)}
            className="border border-amber-400 p-2 w-full mb-4 text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
