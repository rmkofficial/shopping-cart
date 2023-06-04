import React, { useState } from "react";

export const MyContext = React.createContext();

export const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState("Mert");

  const value = {
    myState,
    setMyState,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
