import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Carrusel from "../features/inicio/carrusel";
import Inspiracion from "../features/inicio/inspiracion";
import Destacadas from "../features/inicio/componentes/destacadas/destacadas";
import Novedades from "../features/inicio/componentes/novedades/novedades";
import Testimonios from "../features/inicio/componentes/testimonios/testimonios";
import Nosotros from "../features/inicio/nosotros";
import Informacion from "../features/inicio/informacion";
import Contacto from "../features/inicio/contactanos";

export default function Inicio() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.targetHash) {
      const hash = location.state.targetHash;
      const targetId = hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        window.history.replaceState({}, document.title);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <div>
        <Carrusel />
      </div>
      <div>
        <Inspiracion />
      </div>
      <div id="destacados">
        <Destacadas/>
      </div>
      <div id="novedades">
        <Novedades/>
      </div>
      <div id="comentarios">
        <Testimonios/>
      </div>
      <div id="nosotros">
        <Nosotros/>
      </div>
      <div id="contacto">
        <Contacto/>
      </div>
      <div>
        <Informacion/>
      </div>
    </>
  );
}