import React from "react";
import { motion } from "framer-motion";
import { Sparkles, AlertTriangle, ArrowUpRight } from "lucide-react";

export default function TarjetaNovedad({ product, cardVariants }) {
  const isNuevo = product.type === "nuevo";

  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-[#F8FAFC] dark:bg-[#131926] border border-black/[0.03] dark:border-white/[0.02] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
    >
      {/* El Toque de Brillo: Degradado radial translúcido en Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(240, 177, 0, 0.08) 0%, rgba(240, 177, 0, 0) 70%)"
        }}
      />

      {/* Contenedor de la Imagen */}
      <div className="w-full aspect-[4/5] overflow-hidden bg-[#F1F3F7] dark:bg-[#1A2333] relative z-10 transition-colors duration-700">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Etiqueta Flotante Premium */}
        <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#0B0F19]/80 dark:bg-[#1A2333]/90 backdrop-blur-md text-white text-[11px] font-bold uppercase px-3 py-1.5 rounded-lg tracking-wider shadow-md">
          {isNuevo ? (
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <AlertTriangle className="h-3.5 w-3.5 text-rose-400" />
          )}
          {product.tagLabel}
        </span>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-6 flex flex-col flex-grow justify-between relative z-10">
        <div>
          <h3 className="text-lg font-extrabold text-[#0B0F19] dark:text-white group-hover:text-[#F0B100] dark:group-hover:text-[#F0B100] transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-2 line-clamp-2 leading-relaxed">
            {product.desc}
          </p>
        </div>

        {/* Footer de la Tarjeta: Precio y CTA */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#F1F3F7] dark:border-[#1A2333] transition-colors duration-700">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-slate-400 dark:text-slate-500 font-bold tracking-wider">
              Precio
            </span>
            <span className="text-xl font-black text-[#0B0F19] dark:text-white">
              {product.price}
            </span>
          </div>

          <button className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all transform active:scale-95 shadow-sm text-white ${
            isNuevo 
              ? "bg-[#0B0F19] hover:bg-[#F0B100] dark:bg-white dark:text-[#0B0F19] dark:hover:bg-[#F0B100] dark:hover:text-white" 
              : "bg-slate-700 hover:bg-[#F0B100] dark:bg-[#1A2333] dark:hover:bg-[#F0B100]"
          }`}>
            Ver prenda
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}