// Router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import WhoWhyCorsaFutures from "@pages/AboutUs/WhoWhyCorsaFutures";
import RegulatorySupervision from "@pages/AboutUs/RegulatorySupervision";
import LegalDocuments from "@pages/AboutUs/LegalDocuments";
import PrivacyPolicy from "@pages/AboutUs/PrivacyPolicy";
import ContactUs from "@pages/AboutUs/ContactUs";
import EconomicCalendar from "@pages/TradingTools/EconomicCalendar";
import MarketNews from "@pages/TradingTools/MarketNews";
import AllInOne from "@pages/TradingTools/Subpages/AllInOne";
import Currency from "@pages/TradingTools/Subpages/Currency";
import PipValue from "@pages/TradingTools/Subpages/PipValue";
import Margin from "@pages/TradingTools/Subpages/Margin";
import Swaps from "@pages/TradingTools/Subpages/Swaps";
import Platform from "@pages/Platform/Platform";

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

        {/* Trading Tools */}
        <Route path="/economic-calendar" element={<EconomicCalendar />} />
        <Route path="/market-news" element={<MarketNews />} />
        <Route path="/all-in-one" element={<AllInOne />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/pip-value" element={<PipValue />} />
        <Route path="/margin" element={<Margin />} />
        <Route path="/swaps" element={<Swaps />} />

        {/* Platform */}
        <Route path="/platform" element={<Platform />} />

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
