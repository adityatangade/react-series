import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <span className="text-blue-600"><img src="/logo.jpeg" width="40px" alt="" /></span>
          RoomMitra99
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/all-properties" className="hover:text-blue-600">Properties</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-blue-600">Contact</Link>
          </li>
        </ul>

        {/* Action buttons */}
        <div className="hidden md:flex gap-2">
          <button className="border px-4 py-2 rounded hover:bg-gray-100">Sign In</button>
          <Link
            to="/list-property"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            List Property
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden block text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 text-center text-gray-700">
          <Link to="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/all-properties" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Properties</Link>
          <Link to="#" className="block hover:text-blue-600">About</Link>
          <Link to="#" className="block hover:text-blue-600">Contact</Link>
          <button className="w-full border px-4 py-2 rounded hover:bg-gray-100">Sign In</button>
          <Link
            to="/list-property"
            className="block bg-black text-white px-4 py-2 rounded hover:bg-gray-900 mt-1"
            onClick={() => setIsOpen(false)}
          >
            List Property
          </Link>
        </div>
      )}
    </nav>
  );
}
