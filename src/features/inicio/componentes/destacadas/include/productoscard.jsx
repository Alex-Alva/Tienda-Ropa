import React from "react";
import { motion } from "framer-motion";

export default function CardProductos({ productos, activeCategory }) {
  if (productos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <p className="text-lg text-slate-400 dark:text-slate-500 font-medium">
          No se encontraron productos disponibles en esta categoría por el momento.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={activeCategory}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
    >
      {productos.map((product) => (
        <div
          key={product.id}
          className="group relative bg-[#F8FAFC] dark:bg-[#131926] rounded-2xl overflow-hidden border border-black/[0.03] dark:border-white/[0.02] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
        >
          {/* Brillo radial premium al hacer hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
            style={{
              background: "radial-gradient(circle at center, rgba(240, 177, 0, 0.08) 0%, rgba(240, 177, 0, 0) 70%)"
            }}
          />

          {/* Contenedor Imagen */}
          <div className="w-full aspect-[4/5] overflow-hidden bg-[#F1F3F7] dark:bg-[#1A2333] relative z-10 transition-colors duration-700">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 bg-[#0B0F19]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md tracking-wider">
              Top Ventas
            </span>
          </div>

          {/* Contenido / Detalles */}
          <div className="p-6 flex flex-col flex-grow justify-between relative z-10">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#0B0F19] dark:text-white line-clamp-1 group-hover:text-[#F0B100] dark:group-hover:text-[#F0B100] transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-xs uppercase text-slate-400 dark:text-slate-500 font-bold tracking-wider mt-1">
                {product.category}
              </p>
            </div>

            {/* Precio y CTA */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#F1F3F7] dark:border-[#1A2333] transition-colors duration-700">
              <span className="text-xl font-black text-[#0B0F19] dark:text-white">
                {product.price}
              </span>
              <button className="bg-[#0B0F19] dark:bg-white text-white dark:text-[#0B0F19] hover:bg-[#F0B100] dark:hover:bg-[#F0B100] hover:text-white dark:hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-all transform active:scale-95 shadow-sm uppercase tracking-wider">
                ver producto
              </button>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}