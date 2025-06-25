import React, { useState, useEffect } from "react";
import axios from "axios";

const PropertyFilterForm = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    priceRange: [5000, 50000],
    city: "",
    area: "",
    type: "",
    gender: "",
    furnishing: "",
  });

  const [areaSuggestions, setAreaSuggestions] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));

    if (name === "area" && filters.city) {
      if (typingTimeout) clearTimeout(typingTimeout);
      const timeout = setTimeout(() => {
        fetchAreaSuggestions(filters.city, value);
      }, 300); // debounce
      setTypingTimeout(timeout);
    }
  };

  const fetchAreaSuggestions = async (city, query) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/addresses/areas?city=${city}&query=${query}`
      );
      setAreaSuggestions(res.data);
    } catch (err) {
      console.error("Area suggestions fetch error:", err);
    }
  };

  const handleSliderChange = (e, index) => {
    const newRange = [...filters.priceRange];
    newRange[index] = parseInt(e.target.value);
    setFilters((prev) => ({ ...prev, priceRange: newRange }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleSuggestionClick = (area) => {
    setFilters((prev) => ({ ...prev, area }));
    setAreaSuggestions([]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative"
    >
      {/* Price Range */}
      <div className="col-span-1 md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price Range: ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
        </label>
        <div className="flex gap-4 items-center">
          <input
            type="range"
            min="2500"
            max="50000"
            step="500"
            value={filters.priceRange[0]}
            onChange={(e) => handleSliderChange(e, 0)}
            className="w-full"
          />
          <input
            type="range"
            min="2500"
            max="50000"
            step="500"
            value={filters.priceRange[1]}
            onChange={(e) => handleSliderChange(e, 1)}
            className="w-full"
          />
        </div>
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          name="city"
          value={filters.city}
          onChange={handleChange}
          placeholder="e.g. Pune"
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Area */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Area / Location
        </label>
        <input
          type="text"
          name="area"
          value={filters.area}
          onChange={handleChange}
          placeholder="Start typing area..."
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
        {areaSuggestions.length > 0 && (
          <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full max-h-40 overflow-y-auto">
            {areaSuggestions.map((suggestion, i) => (
              <li
                key={i}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">All</option>
          <option value="FLAT">Flat</option>
          <option value="PG">PG</option>
          <option value="HOSTEL">Hostel</option>
        </select>
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <select
          name="gender"
          value={filters.gender}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Any</option>
          <option value="BOYS">Boys</option>
          <option value="GIRLS">Girls</option>
          <option value="FAMILY">Family</option>
          <option value="ANY">Any</option>
        </select>
      </div>

      {/* Furnishing */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Furnishing</label>
        <select
          name="furnishing"
          value={filters.furnishing}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Any</option>
          <option value="FURNISHED">Furnished</option>
          <option value="SEMIFURNISHED">Semi-Furnished</option>
          <option value="UNFURNISHED">Unfurnished</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2 lg:col-span-3 flex justify-end mt-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
};

export default PropertyFilterForm;
