import { React, createContext, useContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

const TitleContext = createContext({});

function TitleProvider({ children }) {

  const [title, setTitle] = useState('')

  return (
    <TitleContext.Provider
      value={{
        title,
        setTitle
      }}
    >
      {children}
    </TitleContext.Provider>
  );
}

function useTitle() {
  const context = useContext(TitleContext);

  return context;
}

export { TitleProvider, useTitle, TitleContext };