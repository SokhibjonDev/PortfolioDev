import React from "react";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage";
import ContactPage from "./pages/contactPg/contactPage";
import AboutPage from "./pages/aboutPg/aboutPage";
import ServicePage from "./pages/servicePg/servicePage";
import ExperiencePage from "./pages/experiencePg/experiencePage";
import PortfolioPage from "./pages/portfolioPg/portfolioPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/portfolios" element={<PortfolioPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
