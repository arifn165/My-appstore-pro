import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import appData from "../data/appsData.json";

const AppDetails = () => {
  const { appId } = useParams();
  const { user } = useContext(AuthContext);
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [review, setReview] = useState("");

  useEffect(() => {
    const foundApp = appData.find((item) => item.id === appId);
    setApp(foundApp);
  }, [appId]);

  const handleInstall = () => setInstalled(true);
  const handleUninstall = () => setInstalled(false);
  const handleReview = () => {
    alert("Thanks for your review: " + review);
    setReview("");
  };

  if (!app) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <img src={app.image} alt={app.name} className="w-40" />
      <h2 className="text-xl font-bold">{app.name}</h2>
      <p>{app.description}</p>

      {installed ? (
        <button onClick={handleUninstall} className="bg-red-500 px-4 py-2 text-white rounded mt-3">
          Uninstall
        </button>
      ) : (
        <button onClick={handleInstall} className="bg-green-500 px-4 py-2 text-white rounded mt-3">
          Install
        </button>
      )}

      {installed && (
        <div className="mt-4">
          <h4 className="font-semibold">Leave a Review:</h4>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="border p-2 w-full mt-2"
            rows="3"
          ></textarea>
          <button
            onClick={handleReview}
            className="bg-blue-600 text-white px-3 py-1 mt-2 rounded"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
