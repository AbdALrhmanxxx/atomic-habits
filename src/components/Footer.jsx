import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Atomic Habits</h3>
            <p className="text-sm">Build better habits, one step at a time.</p>
          </div>

          {/* Middle Section - Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a className="hover:text-gray-400">
              About
            </a>
            <a  className="hover:text-gray-400">
              Features
            </a>
            <a  className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Right Section - Social Media */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-4 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Atomic Habits. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
