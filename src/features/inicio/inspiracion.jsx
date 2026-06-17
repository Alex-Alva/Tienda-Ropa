import React from "react";
import { motion } from "framer-motion";

// --- IMPORTACIÓN DE IMÁGENES LOCALES ---
import ropa from "../../assets/ropa.jpg";
import ropita from "../../assets/ropita.jpg";

export default function Inspiracion() {
  return (
    <motion.section
     className="relative min-h-[70vh] bg-white dark:bg-[#0B0F19] text-[#0B0F19] dark:text-white transition-colors duration-700 overflow-hidden"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", type: "tween" }}
      viewport={{ once: true, amount: 0.2 }}
    >

      <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="relative isolate mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center sm:text-left">
          
          {/* Imagen izquierda (ropa) con efecto Glow al hacer Hover */}
          <div className="relative block shrink-0 mr-2 sm:mr-6 lg:mr-10 group">
            <FlowerPortrait
              src={ropa}
              alt="Imagen inspiracional izquierda"
              accentColor="#F0B100"
            />
          </div>

          {/* Texto central con Contraste Máximo */}
          <div className="relative mx-auto text-center">
            <h2 className="mx-auto max-w-4xl text-pretty text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight transition-colors duration-700 text-[#0B0F19] dark:text-white">
              Creando Experiencias Únicas e Inspiradoras para Ti
            </h2>
          </div>

          {/* Imagen derecha (ropita) con efecto Glow al hacer Hover */}
          <div className="relative block shrink-0 ml-2 sm:ml-6 lg:ml-10 group">
            <FlowerPortrait
              src={ropita}
              alt="Imagen inspiracional derecha"
              accentColor="#F0B100"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Componente de imagen flotante optimizado con el Efecto Glow Radial al pasar el mouse
function FlowerPortrait({ src, alt, accentColor }) {
  return (
    <div className="relative h-24 w-24 sm:h-36 sm:w-36 md:h-40 md:w-40 animate-floatY">
      
      {/* 3. EL TOQUE DE BRILLO: Degradado radial translúcido que se activa con el hover (group-hover) */}
      <div 
        className="absolute inset-[-20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, rgba(240, 177, 0, 0.15) 0%, rgba(240, 177, 0, 0) 70%)`
        }}
      />

      {/* Contenedor de la Card/Imagen con fondos asignados segun el modo */}
      <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-2 border-transparent bg-[#F8FAFC] dark:bg-[#131926] shadow-md transition-colors duration-700">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Círculos decorativos de los bordes (Ajustados con colores de la nueva guía) */}
      {[
        "-top-2 left-1/2 -translate-x-1/2",
        "top-4 -left-2",
        "top-4 -right-2",
        "-bottom-2 left-1/2 -translate-x-1/2",
      ].map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} h-7 w-7 rounded-full border-2 bg-[#F8FAFC] dark:bg-[#131926] transition-colors duration-700 z-20`}
          style={{ borderColor: accentColor }}
        />
      ))}
    </div>
  );
}