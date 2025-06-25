import React from "react";
import SearchForm from "../components/SearchForm";
import InfoSection from "../components/InfoSection";
import PropertyList from "../components/PropertyList";
import CallToAction from "../components/CallToAction";

const HomePage = () => {
  return (
    <main className="bg-gray-50">
      

      {/* Why Choose Us / Info Section */}
      <InfoSection />

      {/* Featured Property Cards */}
      <PropertyList />

      {/* Blue Banner / CTA */}
      <CallToAction />
    </main>
  );
};

export default HomePage;
