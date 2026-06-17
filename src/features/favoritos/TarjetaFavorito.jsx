import React from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Tag, Sparkles, AlertTriangle } from "lucide-react";

export default function TarjetaFavorito({ producto, onQuitar }) {
  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        scale: 0.95,
        y: -8,
        transition: { duration: 0.25, ease: "easeOut" }
      }}
      transition={{
        layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
      }}
      className="group"
    >
      <div className="bg-white dark:bg-[#131926] rounded-[15px] p-3 flex flex-col flex-1 h-full w-full relative overflow-hidden z-10">
        {/* Efecto Glow Premium */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(223,171,43,0.15)_0%,transparent_70%)]" />
        
        {/* Contenedor Imagen */}
        <div className="relative aspect-[4/5] w-full bg-slate-50 dark:bg-[#0B0F19] rounded-xl overflow-hidden z-10">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          
          {/* Etiquetas / Alertas */}
          {producto.alerta && (
            <div className="absolute top-3 left-3 right-12 flex flex-col gap-1.5 pointer-events-none">
              {producto.alerta.tipo === "descuento" && (
                <span className="self-start bg-[#DFAB2B] text-[#0B0F19] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1 shadow-sm">
                  <Tag className="h-2.5 w-2.5" />
                  {producto.alerta.texto}
                </span>
              )}
              {producto.alerta.tipo === "promocion" && (
                <span className="self-start bg-[#0B0F19]/90 dark:bg-white/90 text-white dark:text-[#0B0F19] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1 shadow-sm border border-white/[0.1] dark:border-black/[0.1]">
                  <Sparkles className="h-2.5 w-2.5 text-[#DFAB2B]" />
                  {producto.alerta.texto}
                </span>
              )}
              {producto.alerta.tipo === "stock" && (
                <span className="self-start bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1 shadow-sm animate-pulse">
                  <AlertTriangle className="h-2.5 w-2.5" />
                  {producto.alerta.texto}
                </span>
              )}
            </div>
          )}

          {/* Botón Eliminar */}
          <button
            onClick={() => onQuitar(producto.id)}
            title="Quitar de favoritos"
            className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white dark:bg-[#131926] flex items-center justify-center border border-slate-200/50 dark:border-slate-800 shadow-md active:scale-90 transition-transform z-20 group/fav"
          >
            <Heart className="h-4 w-4 fill-red-500 text-red-500 group-hover/fav:fill-transparent group-hover/fav:text-slate-400 transition-colors" />
          </button>
        </div>

        {/* Detalles y Acciones */}
        <div className="pt-4 px-2 pb-2 flex flex-col flex-1 justify-between z-10">
          <div>
            <div className="flex justify-between items-baseline gap-2 mb-1.5">
              <h3 className="text-sm font-bold tracking-tight text-[#0B0F19] dark:text-white line-clamp-1">
                {producto.nombre}
              </h3>
              <div className="text-right whitespace-nowrap">
                {producto.alerta?.tipo === "descuento" && producto.alerta.precioAntes && (
                  <span className="block text-[10px] text-slate-400 line-through font-medium leading-none mb-0.5">
                    S/ {producto.alerta.precioAntes.toFixed(2)}
                  </span>
                )}
                <span className="text-sm font-black text-[#0B0F19] dark:text-white block leading-none">
                  S/ {producto.precio.toFixed(2)}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-relaxed mb-4 line-clamp-2">
              {producto.desc}
            </p>
          </div>

          <button
            onClick={() => console.log(`Comprando favorito: ${producto.nombre}`)}
            className="w-full bg-[#0B0F19] text-white dark:bg-white dark:text-[#0B0F19] font-bold text-[10px] uppercase tracking-widest py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/btn border border-transparent shadow-sm hover:bg-[#DFAB2B] dark:hover:bg-[#DFAB2B] hover:text-[#0B0F19] dark:hover:text-[#0B0F19] hover:shadow-[0_0_20px_rgba(223,171,43,0.3)]"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Agregar al carrito
          </button>
        </div>
      </div>
    </motion.div>
  );
}