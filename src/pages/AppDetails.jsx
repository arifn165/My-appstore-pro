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

if (foundApp) {
document.title = `${foundApp.name} | AppStore`;
}
}, [appId]);

  const handleInstall = () => setInstalled(true);
  const handleUninstall = () => setInstalled(false);
  const handleReviewSubmit = () => {
    alert("Thanks for your review: " + review);
    setReview("");
  };

  if (!app) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <img src={app.image} alt={app.name} className="w-40 h-40 object-contain mb-4" />
      <h2 className="text-2xl font-bold mb-2">{app.name}</h2>
      <p className="mb-4">{app.description}</p>

      {installed ? (
        <button onClick={handleUninstall} className="bg-red-500 text-white px-4 py-2 rounded">
          Uninstall
        </button>
      ) : (
        <button onClick={handleInstall} className="bg-green-600 text-white px-4 py-2 rounded">
          Install
        </button>
      )}

      {installed && (
        <div className="mt-6">
          <h4 className="font-semibold text-lg">Leave a Review</h4>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border p-2 mt-2 rounded"
            rows="3"
          />
          <button
            onClick={handleReviewSubmit}
            className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
