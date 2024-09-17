import { Route, Routes } from "react-router-dom";
import { AppLayout } from '../Layout/AppLayout';
import { Documentos } from '../pages/Documentos';
import { Ficha } from '../pages/Ficha';
import { Home } from "../pages/Home";
import { Portrait } from '../pages/Portrait';
import Streaming from "../pages/Streaming";
import WebCam from "../pages/Webcam";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/ficha/portrait/:id" element={<Portrait />} />
      <Route path="/sessao/documentos/:id" element={<Documentos />} />

      <Route path="/streaming/:roomId" element={<Streaming />} />
      <Route path="/webcam/:roomId" element={<WebCam />} />

      <Route path="/" element={<AppLayout />}>
        <Route path="/sessao/ficha/:id" element={<Ficha />} />
        <Route path="/ficha/:id" element={<Ficha />} />
      </Route>

    </Routes>
  );
}