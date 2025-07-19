// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-3">AppStore</h3>
          <p>Your one-stop app platform.</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">Links</h3>
          <ul>
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Developer Resources</h3>
          <ul>
            <li><a href="https://firebase.google.com/docs" target="_blank" rel="noreferrer" className="hover:underline">Firebase Docs</a></li>
            <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer" className="hover:underline">React Docs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Social Media</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        &copy; {new Date().getFullYear()} AppStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
