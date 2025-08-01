"use client";

import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";

export const CreateContext = createContext();

export const useAppContext = () => useContext(CreateContext);

const Context = ({ children }) => {
  const [mobile, setMobile] = useState(true);
  const [isLogin, setIsLogin] = useState(false); // Add login state

  useEffect(() => {
    const loginCookie = Cookies.get("isLogin");
    setIsLogin(loginCookie === "true");
  }, []);

  return (
    <CreateContext.Provider
      value={{
        mobile,
        setMobile,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default Context;
