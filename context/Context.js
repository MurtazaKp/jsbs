"use client";

import React, { createContext, useContext, useState } from "react";

export const CreateContext = createContext();

export const useAppContext = () => useContext(CreateContext);

const Context = ({ children }) => {
  const [mobile, setMobile] = useState(true);

  return (
    <CreateContext.Provider value={{ mobile, setMobile }}>
      {children}
    </CreateContext.Provider>
  );
};

export default Context;
