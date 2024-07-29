import React from "react";
import "./Home.css";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import Sidebar from "../Navigation/Sidebar";
import MainContent from "./modules/MainContent/MainContent";
import AccountVerification from "../AccountVerification/AccountVerification";

const Dashboard = () => {
  return (
    <>
      <Header />
      <>
        <Sidebar />
        {/* Routes? */}
        <MainContent />
        <AccountVerification />
        <Footer />
      </>
    </>
  );
};

export default Dashboard;
