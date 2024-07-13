// Router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import WhoWhyCorsaFutures from "@pages/AboutUs/WhoWhyCorsaFutures";
import RegulatorySupervision from "@pages/AboutUs/RegulatorySupervision";
import LegalDocuments from "@pages/AboutUs/LegalDocuments";
import PrivacyPolicy from "@pages/AboutUs/PrivacyPolicy";
import ContactUs from "@pages/AboutUs/ContactUs";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<WhoWhyCorsaFutures />} />
        <Route
          path="/regulatory-supervision"
          element={<RegulatorySupervision />}
        />
        <Route path="/legal-documents" element={<LegalDocuments />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
