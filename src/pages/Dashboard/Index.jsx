import React from "react";
import "./Index.css";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Sidebar from "./Navigation/Sidebar";
import MainContent from "./Home/MainContent";

const Dashboard = () => {
  return (
    <>
      <Header />
      <>
        <Sidebar />
        {/* Routes? */}
        <MainContent />
        <Footer />
      </>
    </>
  );
};

export default Dashboard;
