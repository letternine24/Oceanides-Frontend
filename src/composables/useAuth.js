import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuthStatus = localStorage.getItem("isAuthenticated") || "false";
    return savedAuthStatus ? JSON.parse(savedAuthStatus) : false;
  });

  const toggleAuth = () => {
    setIsAuthenticated((prevAuth) => {
      const newAuthStatus = !prevAuth;
      console.log(newAuthStatus);
      localStorage.setItem("isAuthenticated", JSON.stringify(newAuthStatus));
      return newAuthStatus;
    });
  };

  useEffect(() => {
    console.log("Authentication status:", isAuthenticated);
  }, [isAuthenticated]);

  return { isAuthenticated, toggleAuth };
};

export default useAuth;
