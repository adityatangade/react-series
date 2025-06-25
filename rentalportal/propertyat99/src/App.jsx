import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ViewAllProperties from "./pages/ViewAllProperties";
import AddPropertyForm from "./components/AddPropertyForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-properties" element={<ViewAllProperties />} />
        <Route path="/list-property" element={<AddPropertyForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
