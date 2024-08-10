import React from "react";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Sidebar from "./Navigation/Sidebar";
import { Outlet } from "react-router-dom";
import CenterWrapper from "@components/Layout/CenterWrapper";

const Index = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <CenterWrapper>
        <Outlet />
        <Footer />
      </CenterWrapper>
    </>
  );
};

export default Index;
