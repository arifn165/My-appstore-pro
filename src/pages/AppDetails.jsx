import React, { useContext, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import appData from "../data/appsData.json";

const AppDetails = () => {
  const { appId } = useParams();
  const { user } = useContext(AuthContext);
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    const foundApp = appData.find((item) => item.id === appId);
    setApp(foundApp);
    if (foundApp) {
      document.title = `${foundApp.name} | AppStore`;
         const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
      setInstalled(installedApps.includes(appId));
           setReviews(foundApp.reviews || []);
    }
  }, [appId]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.includes(appId)) {
      installedApps.push(appId);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }
    setInstalled(true);
  };

  const handleUninstall = () => {
    let installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    installedApps = installedApps.filter(id => id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
    setInstalled(false);
  };

  const handleReviewSubmit = () => {
    if (review.trim() === "") {
      alert("Review cannot be empty");
      return;
    }
    const newReview = {
      user: user.displayName || user.email,
      rating: 5,  
      comment: review,
    };
    setReviews([newReview, ...reviews]);
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

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Reviews</h3>
        {reviews.length === 0 && <p>No reviews yet.</p>}
        <ul>
          {reviews.map((r, i) => (
            <li key={i} className="mb-4 border-b pb-2">
              <p><strong>{r.user}</strong> says:</p>
              <p>{r.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppDetails;
