import React from "react";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";

const sampleProperties = [
  {
    id: 1,
    name: "Ocean View Apartment",
    type: "FLAT",
    rent: 25000,
    locationUrl: "https://maps.app.goo.gl/fuxMzRkgP4zveD8n8",
    address: {
      city: "Pune",
      state: "Maharashtra",
      area: "Aundumbar Colony B",
      street: "FC Road",
      country: "India",
    },
    gender: "ANY",
    furnishing: null,
    images: [
      { imgUrl: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg" },
      { imgUrl: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg" },
      { imgUrl: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" },
    ],
    owner: {
      name: "Aditya Tangade",
      phone: "9876543210",
    },
  },
  {
    id: 2,
    name: "Elite Heights",
    type: "FLAT",
    rent: 22000,
    locationUrl: "https://maps.app.goo.gl/fuxMzRkgP4zveD8n8",
    address: {
      city: "Bangalore",
      state: "Karnataka",
      area: "Indiranagar",
      street: "123 MG Road",
      country: "India",
    },
    gender: "FAMILY",
    furnishing: "FURNISHED",
    images: [
      { imgUrl: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg" },
      { imgUrl: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg" },
    ],
    owner: {
      name: "Aditya Tangade",
      phone: "9876543210",
    },
  },
  {
    id: 3,
    name: "Sunshine Villa",
    type: "HOSTEL",
    rent: 9500,
    locationUrl: "https://maps.app.goo.gl/fuxMzRkgP4zveD8n8",
    address: {
      city: "Hyderabad",
      state: "Telangana",
      area: "Jubilee Hills",
      street: "DSR SR PRIME SPACES LLPPlot No.: 221, Road No.: 17",
      country: "India",
    },
    gender: "BOYS",
    furnishing: "SEMIFURNISHED",
    images: [
      { imgUrl: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" },
      { imgUrl: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg" },
      { imgUrl: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg" },
    ],
    owner: {
      name: "Ravi Sharma",
      phone: "8886543210",
    },
  },
];

const PropertyList = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Properties</h2>
        <Link
          to="/all-properties"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {sampleProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default PropertyList;
