import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import ropa from "../../assets/ropa.jpg";
import ropita from "../../assets/ropita.jpg";
import fondito from "../../assets/fondito.jpg"; 

const images = [ropa, ropita, ropa, ropita, ropa, ropita];

export default function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    stopAutoPlay(); 
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // Ajusté el tiempo a 3500ms para que dé tiempo de apreciar la transición fluida
    }, 3500); 
  };

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handleNav = (direction) => {
    stopAutoPlay(); 

    if (direction === "next") {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    setTimeout(() => {
      startAutoPlay();
    }, 2000);
  };

  const getPositionIndex = (imgIndex) => {
    const diff = imgIndex - currentIndex;
    if (diff < -images.length / 2) return diff + images.length;
    if (diff > images.length / 2) return diff - images.length;
    return diff;
  };

  return (
    <motion.section
      className="relative h-[70vh] sm:h-screen w-full overflow-hidden transition-colors duration-700 bg-transparent flex flex-col items-center justify-center select-none"
      initial={{ y: "-10%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* IMAGEN DE FONDO DETRÁS DEL ELEMENTO */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none blur-[4px] scale-105 brightness-[0.85] dark:brightness-[0.6]"
        style={{ backgroundImage: `url(${fondito})` }}
      />
      
      {/* CAPA DE COLOR BASE PARA CONTROLAR LA OSCURIDAD GENERAL DE FONDO */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 dark:from-black/90 dark:via-black/60 dark:to-black/95 transition-colors duration-700 z-[1] pointer-events-none" />

      {/* =======================================================================
        EFECTO DE MARCO OSCURO DIFUMINADO SUPERIOR E INFERIOR (MÁSCARA CSS)
        =======================================================================
        Esta capa se superpone al carrusel completo. Usa un gradiente lineal invertido 
        para crear el desvanecimiento translúcido hacia el centro en los extremos verticales.
      */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #000 0%, transparent 15%, transparent 85%, #000 100%)",
          opacity: 0.85 // Puedes ajustar este valor (0.0 a 1.0) para definir qué tan oscuro se ve el marco
        }}
      />

      {/* CONTENEDOR PRINCIPAL DEL EFECTO 3D COVERFLOW */}
      <div className="relative z-10 w-full max-w-7xl h-[450px] flex items-center justify-center px-4">
        
        {/* FLECHA IZQUIERDA - Mayor z-index para sobrepasar la máscara */}
        <button
          onClick={() => handleNav("prev")}
          className="absolute left-4 sm:left-8 z-30 bg-white/80 dark:bg-black/50 text-gray-800 dark:text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg focus:outline-none backdrop-blur-sm"
          aria-label="Anterior"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* CONTENEDOR DE TARJETAS DE IMÁGENES */}
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((img, index) => {
            const position = getPositionIndex(index);
            const isCenter = position === 0;
            
            if (Math.abs(position) > 2) return null;

            return (
              <motion.div
                key={index}
                className="absolute w-[240px] sm:w-[320px] h-[340px] sm:h-[420px] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/20 dark:border-white/10"
                initial={false}
                animate={{
                  x: position * 180, 
                  scale: isCenter ? 1.1 : 0.85 - Math.abs(position) * 0.05,
                  zIndex: 20 - Math.abs(position),
                  opacity: 1 - Math.abs(position) * 0.25,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
              >
                <img
                  src={img}
                  alt={`Imagen carrusel 3D ${index + 1}`}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    !isCenter ? "brightness-50 backdrop-blur-[1px]" : "brightness-100"
                  }`}
                  loading="eager"
                />
              </motion.div>
            );
          })}
        </div>

        {/* FLECHA DERECHA - Mayor z-index para sobrepasar la máscara */}
        <button
          onClick={() => handleNav("next")}
          className="absolute right-4 sm:right-8 z-30 bg-white/80 dark:bg-black/50 text-gray-800 dark:text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg focus:outline-none backdrop-blur-sm"
          aria-label="Siguiente"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5 l7 7-7 7" />
          </svg>
        </button>

      </div>
    </motion.section>
  );
}