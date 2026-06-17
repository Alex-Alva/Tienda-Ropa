import React from "react";
import { Star, MessageSquarePlus } from "lucide-react";

export default function FiltrosTestimonios({ selectedStars, setSelectedStars, onOpenForm }) {
  return (
    <div className="bg-[#F8FAFC] dark:bg-[#131926] rounded-2xl p-6 shadow-sm border border-black/[0.03] dark:border-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-6 mb-10 transition-colors duration-700">
      
      {/* Resumen General de Calificaciones */}
      <div className="text-center md:text-left flex flex-col sm:flex-row items-center gap-4">
        <h3 className="text-5xl font-black text-[#0B0F19] dark:text-white">4.2</h3>
        <div>
          <div className="flex justify-center sm:justify-start gap-0.5 text-[#F0B100]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
            Basado en las experiencias de nuestra comunidad
          </p>
        </div>
      </div>

      {/* Filtros por Nivel de Estrellas */}
      <div className="flex flex-wrap justify-center items-center gap-2 max-w-xl">
        <button
          onClick={() => setSelectedStars("todos")}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${
            selectedStars === "todos"
              ? "bg-[#0B0F19] text-white dark:bg-white dark:text-[#0B0F19]"
              : "bg-[#F1F3F7] dark:bg-[#1A2333] text-slate-500 dark:text-slate-400 hover:bg-[#0B0F19]/5 dark:hover:bg-white/5"
          }`}
        >
          Todos
        </button>
        {[5, 4, 3, 2, 1, 0].map((starValue) => (
          <button
            key={starValue}
            onClick={() => setSelectedStars(starValue.toString())}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all duration-300 ${
              selectedStars === starValue.toString()
                ? "bg-[#F0B100] text-white ring-2 ring-[#F0B100]/20"
                : "bg-[#F1F3F7] dark:bg-[#1A2333] text-slate-500 dark:text-slate-400 hover:bg-[#0B0F19]/5 dark:hover:bg-white/5"
            }`}
          >
            {starValue} <Star className="h-3 w-3 fill-current" />
          </button>
        ))}
      </div>

      {/* Botón para Abrir Formulario Deslizable */}
      <button 
        onClick={onOpenForm}
        className="flex items-center gap-2 bg-[#0B0F19] dark:bg-white text-white dark:text-[#0B0F19] hover:bg-[#F0B100] dark:hover:bg-[#F0B100] hover:text-white dark:hover:text-white px-5 py-3 rounded-xl text-sm font-extrabold uppercase tracking-wider transition-all transform active:scale-95 shadow-md shrink-0"
      >
        <MessageSquarePlus className="h-4 w-4" />
        Escribir opinión
      </button>
    </div>
  );
}