import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/global";
import { AuthProvider } from "./hooks/useAuth";
import { Routes } from "./routes";
import { FichasProvider } from "./hooks/useFichas";
import { DisabledProvider } from "./hooks/useDisabled";
import { TitleProvider } from "./hooks/useTitle";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <TitleProvider>
      <FichasProvider>
        <DisabledProvider>
          <Routes />
          <GlobalStyles />
          <ToastContainer/>
        </DisabledProvider>
      </FichasProvider>
    </TitleProvider>
  </AuthProvider>
);