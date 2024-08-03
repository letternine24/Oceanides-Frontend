import React from "react";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Sidebar from "./Navigation/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Header />
      <>
        <Sidebar />
        <Outlet />
        <Footer />
      </>
    </>
  );
};

export default Dashboard;
