// src/pages/About.jsx
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | AppStore";
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About AppStore</h1>
      <p>
        Welcome to AppStore, your go-to platform for discovering, installing, and reviewing your favorite apps. Our mission is to make app management simple and engaging.
      </p>
      <p className="mt-4">
        Developed by [Your Name]. This project is built with React, Firebase Authentication, and Tailwind CSS.
      </p>
    </div>
  );
};

export default About;
