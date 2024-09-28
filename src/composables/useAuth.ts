import { useState, useEffect } from "react";
import { useUserDataStore } from "@/store/user/useUserDataStore";
import { useUserInfoStore } from "@/store/user/useUserInfoStore";
import { LOCAL_STORAGE_KEY } from "@/enum/localStorageKey";

const useAuth = () => {
  const { setUserData } = useUserDataStore();
  const { setUserInfo } = useUserInfoStore();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const savedAuthStatus = localStorage.getItem(
      LOCAL_STORAGE_KEY.IS_AUTHENTICATED
    );
    return savedAuthStatus ? JSON.parse(savedAuthStatus) : false;
  });

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY.IS_AUTHENTICATED,
      JSON.stringify(isAuthenticated)
    );
  }, [isAuthenticated]);

  const login = () => {
    if (!isAuthenticated) {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);

      // @TODO CLEAR UP STORES HERE BY SETTING TO NULL
      setUserData(null);
      setUserInfo(null);
      window.location.reload();
    }
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
