import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "@pages/Dashboard/Authentication/SignUp";
import AccountVerification from "@pages/Dashboard/AccountVerification/AccountVerification";
import MainContent from "@pages/Dashboard/Home/modules/MainContent/MainContent";
import Profile from "@pages/Dashboard/Profile/Profile";
import DepositWithdrawals from "@pages/Dashboard/DepositWithdrawals/DepositWithdrawals";
import Dashboard from "./pages/Dashboard/Index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/" element={<Dashboard />}>
          <Route index path="dashboard" element={<MainContent />} />
          <Route path="my-account" element={<AccountVerification />} />
          <Route path="profile" element={<Profile />} />
          <Route path="deposit-withdraw" element={<DepositWithdrawals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
