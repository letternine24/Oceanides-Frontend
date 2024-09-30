import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Public Pages
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

// User Dashboard Pages
import MyAccount from "@pages/Dashboard/MyAccount/Index";
import MainContent from "@pages/Dashboard/Home/modules/MainContent/MainContent";
import Profile from "@pages/Dashboard/Profile/Index";
import DepositWithdrawals from "@pages/Dashboard/DepositWithdrawals/Index";
import Dashboard from "@pages/Dashboard/Index";
import Referrals from "@pages/Dashboard/Referral/Index";
import { useAuthStore } from "./store/useAuthStore";

const Router = () => {
  const { isAuthenticated } = useAuthStore(); // Use the composable to get the auth state

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<WhoWhyCorsaFutures />} />
        <Route
          path="/regulatory-supervision"
          element={<RegulatorySupervision />}
        />
        <Route path="/legal-documents" element={<LegalDocuments />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/economic-calendar" element={<EconomicCalendar />} />
        <Route path="/market-news" element={<MarketNews />} />
        <Route path="/all-in-one" element={<AllInOne />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/pip-value" element={<PipValue />} />
        <Route path="/margin" element={<Margin />} />
        <Route path="/swaps" element={<Swaps />} />
        <Route path="/profit-loss" element={<ProfitLoss />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/trading-account-type" element={<TradingAccountType />} />
        <Route path="/deposit-withdrawal" element={<DepositWithdrawal />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/indices" element={<Indices />} />
        <Route path="/precious-metals" element={<PreciousMetals />} />
        <Route path="/energies" element={<Energies />} />
        <Route path="/commodities" element={<Commodities />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Protected User Dashboard Routes */}
        {isAuthenticated ? (
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<MainContent />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="profile" element={<Profile />} />
            <Route path="deposit-withdraw" element={<DepositWithdrawals />} />
            <Route path="referrals" element={<Referrals />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
