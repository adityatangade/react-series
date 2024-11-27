import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between bg-white shadow-md p-4">
        <div className="flex-shrink-0">
          <img
            src="Assets/Images/brand_logo.png"
            alt="Logo"
            className="w-16 h-auto rounded-xl"
          />
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="text-gray-800 hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600">
            Contact
          </a>
          <a href="#help" className="text-gray-800 hover:text-blue-600">
            Help
          </a>
        </div>

        <button
          id="login-btn"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
