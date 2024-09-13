import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./hooks/useAuth";
import { DisabledProvider } from "./hooks/useDisabled";
import { FichasProvider } from "./hooks/useFichas";
import { TitleProvider } from "./hooks/useTitle";
import { Routes } from "./routes";
import { GlobalStyles } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <TitleProvider>
      <FichasProvider>
        <DisabledProvider>
          <Routes />
          <GlobalStyles />
          <ToastContainer pauseOnHover theme="dark"/>
        </DisabledProvider>
      </FichasProvider>
    </TitleProvider>
  </AuthProvider>
);