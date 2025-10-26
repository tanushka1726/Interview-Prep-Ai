import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);

  // Login: store user info
  const [loadingCheck, setLoadingCheck] = useState(true); // <-- new

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axiosInstance.get(API_PATHS.AUTH.CHECK_LOGIN, {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.log("Not logged in", err); // log error
        setUser(null);
      } finally {
        setLoadingCheck(false);
      }
    };
    checkLogin();
  }, []);
  


  const loginUser = (userData) => {
    setUser(userData);
  };

  // Logout: call API and clear user
  const logoutUser = async () => {
    try {
      await axiosInstance.post(API_PATHS.AUTH.LOGOUT, {}, { withCredentials: true });
      setUser(null);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, loadingCheck }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
