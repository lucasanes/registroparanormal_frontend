import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './hooks/useAuth';
import { DisabledProvider } from './hooks/useDisabled';
import { FichasProvider } from './hooks/useFichas';
import { TitleProvider } from './hooks/useTitle';
import { VolumeProvider } from './hooks/useVolume';
import { Routes } from './routes';
import { GlobalStyles } from './styles/global';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <TitleProvider>
      <FichasProvider>
        <DisabledProvider>
          <VolumeProvider>
            <NextUIProvider>
              <Routes />
              <GlobalStyles />
              <ToastContainer pauseOnHover theme='dark' />
            </NextUIProvider>
          </VolumeProvider>
        </DisabledProvider>
      </FichasProvider>
    </TitleProvider>
  </AuthProvider>
);
