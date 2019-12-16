import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialUserState = JSON.parse(localStorage.getItem("user")) || {};
  const [user, setUser] = useState(initialUserState);
  const [travels, setTravels] = useState([]);
  const [travel, setTravel] = useState(null);
  const [assistants, setAssistants] = useState([]);
  const [step, setStep] = useState(1);

  const resetContext = () => {
    setUser({});
    setTravels([]);
    setTravel(null);
    setAssistants([]);
    setStep(1);
  };

  const resetStepsAndAssistants = () => {
    setAssistants([]);
    setStep(1);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        resetContext,
        travels,
        setTravels,
        travel,
        setTravel,
        assistants,
        setAssistants,
        step,
        setStep,
        resetStepsAndAssistants
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
