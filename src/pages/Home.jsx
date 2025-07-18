import React from "react";
import apps from "../data/appsData.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {apps.map((app) => (
        <div key={app.id} className="bg-white shadow-md rounded-lg p-4">
          <img src={app.image} alt={app.name} className="w-full h-40 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{app.name}</h2>
          <p className="text-gray-600">{app.description}</p>
          <p className="text-sm text-gray-400 mb-2">Category: {app.category}</p>
          <Link to={`/apps/${app.id}`}>
            <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
