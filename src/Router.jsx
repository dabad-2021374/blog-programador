import { Routes, Route, Navigate } from "react-router-dom";
import { Tecnologia } from "./pages/Tecnologia/Tecnologia";
import { Taller } from "./pages/Taller/Taller";
import { PracticaSupervisada } from "./pages/PracticaSupervisada/PracticaSupervisada";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tecnologia" element={<Tecnologia />} />
      <Route path="/taller" element={<Taller />} />
      <Route path="/practica-supervisada" element={<PracticaSupervisada />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
}