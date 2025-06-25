import React, { useState } from "react";

const PropertyCard = ({ property = {} }) => {
  if (!property || !property.name) return null;

  const {
    name,
    type,
    rent,
    address,
    gender,
    furnishing,
    images = [],
    locationUrl,
    owner,
  } = property;

  const [activeImage, setActiveImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveImage(0); // reset to first image when closed
  };

  return (
    <>
      <div className="bg-white rounded shadow p-4 hover:shadow-lg transition relative">
        {/* Image Carousel */}
        <div
          className="relative w-full h-48 overflow-hidden rounded cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={images?.[activeImage]?.imgUrl}
            alt={`Image ${activeImage + 1}`}
            className="w-full h-48 object-cover rounded"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 px-2 py-1 rounded-full text-sm"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 px-2 py-1 rounded-full text-sm"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-3 space-y-1">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600 text-sm">
            {address?.city}, {address?.state}
          </p>
          <p className="text-gray-600 text-sm">{address?.area}</p>
          <p className="text-sm text-gray-500">
            Type: {type} | Rent: ₹{rent}
          </p>
          <p className="text-sm text-gray-500">
            Gender: {gender} | Furnishing: {furnishing || "N/A"}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${address?.street || ""}, ${address?.area || ""}, ${
                address?.city || ""
              }, ${address?.state || ""}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm underline"
          >
            View on Map
          </a>
          <p className="text-xs text-gray-400 mt-1">
            Owner: {owner?.name} ({owner?.phone})
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative max-w-2xl w-full mx-4">
            <img
              src={images?.[activeImage]?.imgUrl}
              alt="Property"
              className="w-full max-h-[90vh] object-contain rounded"
            />
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              ×
            </button>

            {/* Prev/Next inside modal */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;
