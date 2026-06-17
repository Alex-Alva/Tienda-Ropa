import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";

export default function GridProductos({ productos, favoritos, toggleFavorito, setProductoSeleccionado }) {
  return (
    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {productos.map((producto) => {
          const isFav = favoritos.includes(producto.id);
          return (
            <motion.div
              layout
              key={producto.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative p-[1.5px] rounded-2xl overflow-hidden bg-slate-200/60 dark:bg-slate-800/40 hover:bg-gradient-to-br hover:from-[#DFAB2B] hover:via-[#FFF099] hover:to-[#B8860B] transition-all duration-500 flex flex-col hover:shadow-[0_10px_30px_rgba(184,134,11,0.15)]"
            >
              <div className="bg-white dark:bg-[#131926] rounded-[15px] p-3 flex flex-col flex-1 h-full w-full relative overflow-hidden z-10">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(223,171,43,0.15)_0%,transparent_70%)]" />
                <div className="relative aspect-[4/5] w-full bg-slate-50 dark:bg-[#0B0F19] rounded-xl overflow-hidden z-10">
                  <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 bg-[#0B0F19]/80 dark:bg-white/80 text-white dark:text-[#0B0F19] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {producto.estilo}
                  </span>
                  <button onClick={() => toggleFavorito(producto.id)} className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white dark:bg-[#131926] flex items-center justify-center border border-slate-200/50 dark:border-slate-800 shadow-sm active:scale-90 transition-transform z-20 group/fav">
                    <Heart className={`h-4 w-4 transition-colors ${isFav ? "fill-red-500 text-red-500" : "text-slate-400 group-hover/fav:text-red-500"}`} />
                  </button>
                </div>
                <div className="pt-4 px-2 pb-2 flex flex-col flex-1 justify-between z-10">
                  <div>
                    <div className="flex justify-between items-baseline gap-2 mb-2">
                      <h3 className="text-base font-bold tracking-tight text-[#0B0F19] dark:text-white">{producto.nombre}</h3>
                      <span className="text-sm font-black text-[#0B0F19] dark:text-white whitespace-nowrap">S/ {producto.precio.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed mb-5">{producto.desc}</p>
                  </div>
                  <button onClick={() => setProductoSeleccionado(producto)} className="w-full bg-[#0B0F19] text-white dark:bg-white dark:text-[#0B0F19] font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-transparent shadow-sm hover:bg-[#DFAB2B] hover:text-[#0B0F19] hover:shadow-[0_0_25px_rgba(223,171,43,0.4)]">
                    <ShoppingBag className="h-3.5 w-3.5" /> Agregar al carrito
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}