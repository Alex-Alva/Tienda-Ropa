import React, { useState } from "react";
import Filtros from "../features/oportunidadahorro/filtros";
import Ofertas from "../features/oportunidadahorro/secciones/ofertas";
import Promociones from "../features/oportunidadahorro/secciones/promociones";
import Descuentos from "../features/oportunidadahorro/secciones/descuentos";

export default function OportunidadAhorro() {
  const [tabActiva, setTabActiva] = useState("ofertas");

  return (
    <section className="w-full bg-white text-[#0B0F19] dark:bg-[#0B0F19] dark:text-white py-12 px-4 sm:px-6 transition-colors duration-500 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Filtros y Texto Principal */}
        <Filtros tabActiva={tabActiva} setTabActiva={setTabActiva} />

        {/* Contenidos según el filtro */}
        <div className="w-full">
          {tabActiva === "ofertas" && <Ofertas />}
          {tabActiva === "promociones" && <Promociones />}
          {tabActiva === "descuentos" && <Descuentos />}
        </div>

      </div>
    </section>
  );
}