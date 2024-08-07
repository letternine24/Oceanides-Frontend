import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "@pages/Dashboard/Authentication/SignUp";
import MyAccount from "./pages/Dashboard/MyAccount/Index";
import MainContent from "@pages/Dashboard/Home/modules/MainContent/MainContent";
import Profile from "@pages/Dashboard/Profile/Profile";
import DepositWithdrawals from "@pages/Dashboard/DepositWithdrawals/DepositWithdrawals";
import Dashboard from "@pages/Dashboard/Index";
import Referrals from "@pages/Dashboard/Referral/Index";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/" element={<Dashboard />}>
          <Route index path="dashboard" element={<MainContent />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="profile" element={<Profile />} />
          <Route path="deposit-withdraw" element={<DepositWithdrawals />} />
          <Route path="referrals" element={<Referrals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
