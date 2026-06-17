import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderHeart } from "lucide-react";
import TarjetaFavorito from "../features/favoritos/TarjetaFavorito";
const FAVORITOS_INICIALES = [
  {
    id: 1,
    nombre: "Polo Pima Premium",
    precio: 89.00,
    imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80",
    desc: "Algodón pima peruano con un corte entallado y acabado sedoso.",
    alerta: { tipo: "descuento", texto: "10% OFF Directo", precioAntes: 100.00 }
  },
  {
    id: 2,
    nombre: "Pantalón Chino Slim",
    precio: 149.00,
    imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80",
    desc: "Pantalón de gabardina stretch ideal para la oficina o eventos.",
    alerta: { tipo: "stock", texto: "¡Solo quedan 2 unidades!" }
  },
  {
    id: 3,
    nombre: "Blazer Sastre Estructurado",
    precio: 289.00,
    imagen: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
    desc: "Forro interior satinado y solapas pulidas para una presencia imponente.",
    alerta: { tipo: "promocion", texto: "Llévalo en el Combo 2x1" }
  },
  {
    id: 4,
    nombre: "Casaca Varsity Urbana",
    precio: 199.00,
    imagen: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=500&q=80",
    desc: "Diseño oversized retro con parches bordados de alta densidad.",
    alerta: null
  }
];

export default function Favoritos() {
  const [itemsFavoritos, setItemsFavoritos] = useState(FAVORITOS_INICIALES);

  const quitarDeFavoritos = (id) => {
    setItemsFavoritos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="w-full bg-white text-[#0B0F19] dark:bg-[#0B0F19] dark:text-white py-12 px-4 sm:px-6 transition-colors duration-500 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera de la Sección */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider mb-2">
            Mi Lista de Deseos
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Monitorea la disponibilidad, ofertas de último minuto y promociones de tus prendas favoritas.
          </p>
        </div>

        {/* Contenedor Grid Alternable con Animación */}
        <motion.div layout="position" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {itemsFavoritos.map((producto) => (
              <TarjetaFavorito 
                key={producto.id} 
                producto={producto} 
                onQuitar={quitarDeFavoritos} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Estado Vacío */}
        {itemsFavoritos.length === 0 && <ListaVacia />}
      </div>
    </section>
  );
}

// Subcomponente Auxiliar Local para mantener ordenado el archivo principal
function ListaVacia() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-20 max-w-sm mx-auto"
    >
      <div className="h-16 w-16 bg-[#F1F3F7] dark:bg-[#1A2333] rounded-full flex items-center justify-center mx-auto mb-4 border border-black/[0.02] dark:border-white/[0.02]">
        <FolderHeart className="h-6 w-6 text-slate-400 dark:text-slate-500" />
      </div>
      <h3 className="text-base font-bold mb-1">Tu lista está vacía</h3>
      <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
        Explora el catálogo principal y presiona el ícono del corazón para guardar las prendas que más te gusten.
      </p>
    </motion.div>
  );
}