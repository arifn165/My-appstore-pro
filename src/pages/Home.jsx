// src/pages/Home.jsx
import React from "react";
import apps from "../data/appsData.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {apps.map((app) => (
        <div key={app.id} className="bg-white shadow-md rounded-lg p-4">
          <img
            src={app.image}
            alt={app.name}
            className="object-cover object-center w-full rounded-md h-48"
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold">{app.name}</h2>
            <p className="text-gray-600">{app.description.slice(0, 100)}...</p>
          </div>
          <Link to={`/apps/${app.id}`}>
            <button className="mt-4 w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
