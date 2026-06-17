import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./common/navbar";
import Favoritos from "./pages/Favoritos";
import OportunidadAhorro from "./pages/OportunidadAhorro";
import Productos from "./pages/Productos";
import Inicio from "./pages/Inicio";

export default function App() {
  return (
    <BrowserRouter>
      {/* Asegúrate de que la app tenga la clase h-screen o min-h-screen 
        y un padding superior (pt-24 o pt-28) para que el contenido empiece 
        justo debajo del Navbar horizontal flotante.
      */}
      <div className="min-h-screen bg-gray-100 dark:bg-[#0f0f0f] transition-colors duration-300">
        
        {/* Nuevo Navbar Superior Fijo */}
        <Navbar />

        {/* Contenedor de páginas: Cambiamos el margen izquierdo dinámico 
          por un padding superior (pt-24 en móvil, sm:pt-28 para pantallas más grandes)
          para que el Navbar flotante no tape el inicio de tus secciones.
        */}
        <div className="pt-24 sm:pt-28 p-4 transition-all duration-300">
          <Routes>
            {/* Vista principal donde se encuentran tus secciones de la misma página (#nosotros, #contacto, etc) */}
            <Route path="/" element={<Inicio />} />
            
            {/* Vistas independientes redirigidas por el Navbar */}
            <Route path="/productos" element={<Productos />} />
            <Route path="/favoritos" element={<Favoritos />} />
            
            {/* Cambiado a "/ahorro" para coincidir con el href="/ahorro" del Navbar */}
            <Route path="/ahorro" element={<OportunidadAhorro />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}