import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const Profile = () => {
  const { user, updateProfile } = useContext(AuthContext);

  // ইউজারের নাম আপডেট করার জন্য লোকাল স্টেট
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({ displayName });
      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage("Failed to update profile: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow">
      <h2 className="text-2xl font-bold mb-5">User Profile</h2>
      <p><strong>Email:</strong> {user?.email}</p>

      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block mb-2 font-semibold">Display Name</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
        >
          Update Profile
        </button>
      </form>

      {message && <p className="mt-4 text-blue-600">{message}</p>}
    </div>
  );
};

export default Profile;
