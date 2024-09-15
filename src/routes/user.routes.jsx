import { Route, Routes } from "react-router-dom";
import { AppLayout } from '../Layout/AppLayout';
import { CriarFicha } from "../pages/CriarFicha";
import Dashboard from "../pages/Dashboard";
import { Documentos } from '../pages/Documentos';
import { Ficha } from "../pages/Ficha";
import { Portrait } from '../pages/Portrait';
import { Sessao } from "../pages/Sessao";
import Streaming from "../pages/Streaming";

export function UserRoutes() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/criarficha/" element={<CriarFicha />} />
        <Route path="/sessao/ficha/:id" element={<Ficha />} />
        <Route path="/ficha/:id" element={<Ficha />} /> 
        <Route path="/sessao/mestre/:id" element={<Sessao />} />
        {/* 
        <Route path="/conta" element={<EditarConta />} />
        */}
      </Route>
      <Route path="/ficha/portrait/:id" element={<Portrait />} />
      <Route path="/sessao/documentos/:id" element={<Documentos />} />
      <Route path="/streaming/:id" element={<Streaming />} />
    </Routes>
  );
}
