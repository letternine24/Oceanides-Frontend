// Router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import AboutUs from "@pages/AboutUs/AboutUs";
import RegulatorySupervision from "@pages/AboutUs/RegulatorySupervision";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/regulatory-supervision" element={<RegulatorySupervision />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
