import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="Assets/Images/brand_logo.png"
            alt="Logo"
            className="w-12 h-auto rounded-md"
          />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`md:flex space-x-6 md:space-x-6 absolute md:static bg-white w-full md:w-auto left-0 top-16 z-10 md:opacity-100 ${
            isOpen ? "block opacity-100" : "hidden"
          }`}
        >
          <li>
            <a
              href="#home"
              className="block px-4 py-2 md:inline text-gray-800 hover:text-blue-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block px-4 py-2 md:inline text-gray-800 hover:text-blue-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block px-4 py-2 md:inline text-gray-800 hover:text-blue-600"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-4 py-2 md:inline text-gray-800 hover:text-blue-600"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
