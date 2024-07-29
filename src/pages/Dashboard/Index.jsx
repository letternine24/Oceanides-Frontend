import React from "react";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Sidebar from "./Navigation/Sidebar";
import UserRouter from "../../UserRouter";

const Dashboard = () => {
  return (
    <>
      <Header />
      <>
        <Sidebar />
        <UserRouter />
        <Footer />
      </>
    </>
  );
};

export default Dashboard;
