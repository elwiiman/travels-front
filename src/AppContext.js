import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialUserState = JSON.parse(localStorage.getItem("user")) || {};
  const [user, setUser] = useState(initialUserState);
  const [travels, setTravels] = useState([]);

  const resetContext = () => {
    setUser({});
    setTravels([]);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        resetContext,
        travels,
        setTravels
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
