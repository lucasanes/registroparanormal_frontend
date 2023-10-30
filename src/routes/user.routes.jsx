import { Routes, Route } from "react-router-dom";
import {AppLayout} from '../Layout/AppLayout'
import { Portrait } from '../pages/Portrait'
import { Documentos } from '../pages/Documentos'
import Dashboard from "../pages/Dashboard";
import { CriarFicha } from "../pages/CriarFicha";
import { Ficha } from "../pages/Ficha";

export function UserRoutes() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/criarficha/" element={<CriarFicha />} />
        <Route path="/sessao/ficha/:id" element={<Ficha />} />
        <Route path="/ficha/:id" element={<Ficha />} /> 
        {/* <Route path="/sessao/mestre/:id" element={<Sessao />} />
        <Route path="/conta" element={<EditarConta />} />
        <Route path="/criarficha/convite/:id" element={<CriarFichaConvite />} />
        */}
      </Route>
      <Route path="/ficha/portrait/:id" element={<Portrait />} />
      <Route path="/sessao/documentos/:id" element={<Documentos />} />
    </Routes>
  );
}
