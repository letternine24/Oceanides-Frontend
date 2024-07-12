// Router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import AboutUs from "@pages/AboutUs/AboutUs";
import RegulatorySupervision from "@pages/AboutUs/RegulatorySupervision";
import LegalDocuments from "./pages/AboutUs/LegalDocuments";
import PrivacyPolicy from "./pages/AboutUs/PrivacyPolicy";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/regulatory-supervision" element={<RegulatorySupervision />} />
        <Route path="/legal-documents" element={<LegalDocuments />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
