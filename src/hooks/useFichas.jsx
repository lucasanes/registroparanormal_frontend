import { React, createContext, useContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

const FichasContext = createContext({});

function FichasProvider({ children }) {

  const [fichas, setFichas] = useState([])
  const [dc, setDc] = useState([])
  const [sessaoIdFicha, setSessaoIdFicha] = useState('')

  return (
    <FichasContext.Provider
      value={{
        fichas,
        setFichas,
        dc,
        setDc,
        sessaoIdFicha,
        setSessaoIdFicha,
      }}
    >
      {children}
    </FichasContext.Provider>
  );
}

function useFichas() {
  const context = useContext(FichasContext);

  return context;
}

export { FichasProvider, useFichas, FichasContext };