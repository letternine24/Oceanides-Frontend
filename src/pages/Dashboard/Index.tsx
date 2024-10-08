import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Sidebar from "./Navigation/Sidebar";
import CenterWrapper from "@components/Layout/CenterWrapper";
import { Outlet } from "react-router-dom";
import { useUserDataStore } from "@/store/user/useUserDataStore";
import { useEffect } from "react";
import { useGetUserInfo } from "@/composables/user/useGetUserInfo";
import AppLoader from "@/components/Loader/AppLoader";

const Index: React.FC = () => {
  const { userData } = useUserDataStore();
  const { getUserInfo, loading } = useGetUserInfo();
  const companyId = 2;
  const getUserInfoRequest = {
    userId: userData?.staffUserId,
    companyId,
  };

  useEffect(() => {
    const getInfo = async () => {
      await getUserInfo(getUserInfoRequest);
    };
    getInfo();
  }, []);

  return (
    <>
      {loading && <AppLoader />}
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
