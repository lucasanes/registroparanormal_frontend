import { Routes, Route } from "react-router-dom";
import {AppLayout} from '../Layout/AppLayout'
import { Home } from "../pages/Home";
import {Portrait} from '../pages/Portrait'
import {Documentos} from '../pages/Documentos'
import {Ficha} from '../pages/Ficha'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/ficha/portrait/:id" element={<Portrait />} />
      <Route path="/sessao/documentos/:id" element={<Documentos />} />

      <Route path="/" element={<AppLayout />}>
        <Route path="/sessao/ficha/:id" element={<Ficha />} />
        <Route path="/ficha/:id" element={<Ficha />} />
      </Route>

    </Routes>
  );
}