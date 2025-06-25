import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import PropertyFilterForm from "../components/PropertyFilterForm";

const ViewAllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [lastFilters, setLastFilters] = useState({});

  const fetchProperties = async (filters = {}, page = 0) => {
    try {
      setLoading(true);

      const params = new URLSearchParams();
      if (filters.city) params.append("city", filters.city);
      if (filters.area) params.append("area", filters.area);
      if (filters.type) params.append("type", filters.type);
      if (filters.gender) params.append("gender", filters.gender);
      if (filters.furnishing) params.append("furnish", filters.furnishing);
      if (filters.priceRange) {
        params.append("minPrice", filters.priceRange[0]);
        params.append("maxPrice", filters.priceRange[1]);
      }

      params.append("page", page);
      params.append("size", 6);

      const res = await axios.get(
        `http://localhost:8080/api/properties/paginated?${params.toString()}`
      );

      setProperties(res.data.properties);
      setCurrentPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
      setError("");
    } catch (err) {
      console.error("Error fetching properties:", err);
      setError("Failed to load properties. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties({}, 0);
  }, []);

  const handleFilter = (filters) => {
    setLastFilters(filters);
    fetchProperties(filters, 0); // Reset to first page on filter change
  };

  const handlePageChange = (page) => {
    fetchProperties(lastFilters, page);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        All Available Properties
      </h1>

      {/* 🔍 Filter Form */}
      <PropertyFilterForm onFilter={handleFilter} />

      {/* 🏠 Property Grid */}
      {loading ? (
        <p className="text-center text-gray-500">Loading properties...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : properties.length === 0 ? (
        <p className="text-center text-gray-500">No properties found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={`px-3 py-1 rounded ${
                  currentPage === i
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ViewAllProperties;
