import { React, createContext, useContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const VolumeContext = createContext({});

function VolumeProvider({ children }) {
  const [volume, setVolume] = useState(1);

  return (
    <VolumeContext.Provider
      value={{
        volume,
        setVolume,
      }}
    >
      {children}
    </VolumeContext.Provider>
  );
}

function useVolume() {
  const context = useContext(VolumeContext);

  return context;
}

export { VolumeContext, VolumeProvider, useVolume };
