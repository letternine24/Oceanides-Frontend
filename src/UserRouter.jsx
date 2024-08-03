import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "@pages/Dashboard/Authentication/SignUp";
import AccountVerification from "@pages/Dashboard/AccountVerification/AccountVerification";
import MainContent from "@pages/Dashboard/Home/modules/MainContent/MainContent";
import Profile from "@pages/Dashboard/Profile/Profile";
import DepositWithdrawals from "@pages/Dashboard/DepositWithdrawals/DepositWithdrawals";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/sign-up" element={<SignUp />} />

        {/* Dashboard */}

        <Route path="/dashboard" element={<MainContent />} />
        <Route path="/dashboard/my-account" element={<AccountVerification />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route
          path="/dashboard/deposit-withdraw"
          element={<DepositWithdrawals />}
        />

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
