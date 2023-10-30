import { React, createContext, useContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

const DisabledContext = createContext({});

function DisabledProvider({ children }) {

  const [disabled, setDisabled] = useState(false)

  return (
    <DisabledContext.Provider
      value={{
        disabled,
        setDisabled
      }}
    >
      {children}
    </DisabledContext.Provider>
  );
}

function useDisabled() {
  const context = useContext(DisabledContext);

  return context;
}

export { DisabledProvider, useDisabled, DisabledContext };