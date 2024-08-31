import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Sidebar from "./Navigation/Sidebar";
import CenterWrapper from "@components/Layout/CenterWrapper";
import { Outlet } from "react-router-dom";

const Index: React.FC = () => {
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
