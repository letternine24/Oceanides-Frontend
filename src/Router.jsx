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
import ProfitLoss from "@pages/TradingTools/Subpages/ProfitLoss";
import Platform from "@pages/Platform/Platform";
import TradingAccountType from "@pages/Trading/TradingAccountType";
import DepositWithdrawal from "@pages/Trading/DepositWithdrawal";
import Instruments from "@pages/Trading/Instruments";
import Forex from "@pages/Trading/Subpages/Forex";
import Stocks from "@pages/Trading/Subpages/Stocks";
import Indices from "@pages/Trading/Subpages/Indices";
import PreciousMetals from "@pages/Trading/Subpages/PreciousMetals";
import Energies from "@pages/Trading/Subpages/Energies";
import Commodities from "@pages/Trading/Subpages/Commodities";
import Cryptocurrencies from "@pages/Trading/Subpages/Cryptocurrencies";
import SignUp from "@pages/Dashboard/Authentication/SignUp";
import Login from "@pages/Dashboard/Authentication/Login";

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
        <Route path="/profit-loss" element={<ProfitLoss />} />

        {/* Platform */}
        <Route path="/platform" element={<Platform />} />

        {/* Trading */}
        <Route path="/trading-account-type" element={<TradingAccountType />} />

        {/* Deposit & Withdrawal */}
        <Route path="/deposit-withdrawal" element={<DepositWithdrawal />} />

        {/* Instruments */}
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/indices" element={<Indices />} />
        <Route path="/precious-metals" element={<PreciousMetals />} />
        <Route path="/energies" element={<Energies />} />
        <Route path="/commodities" element={<Commodities />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

        {/* Authentication */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
