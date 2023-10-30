import { React, createContext, useContext, useState, useEffect } from "react";

const FichasNPCSPrincipalContext = createContext({});

function FichasNPCSPrincipalProvider({ children }) {

  const [fichasNPCSPrincipal, setFichasNPCSPrincipal] = useState([])

  return (
    <FichasNPCSPrincipalContext.Provider
      value={{
        fichasNPCSPrincipal,
        setFichasNPCSPrincipal
      }}
    >
      {children}
    </FichasNPCSPrincipalContext.Provider>
  );
}

function useFichasNPCSPrincipal() {
  const context = useContext(FichasNPCSPrincipalContext);

  return context;
}

export { FichasNPCSPrincipalProvider, useFichasNPCSPrincipal, FichasNPCSPrincipalContext };