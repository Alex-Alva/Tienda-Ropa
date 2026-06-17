import React from "react";
import { ArrowRight } from "lucide-react";

export function CardMarcoDorado({ children }) {
  return (
    <div className="group relative p-[1.5px] rounded-2xl overflow-hidden bg-slate-200/60 dark:bg-slate-800/40 hover:bg-gradient-to-br hover:from-[#DFAB2B] hover:via-[#FFF099] hover:to-[#B8860B] transition-all duration-500 flex flex-col hover:shadow-[0_10px_30px_rgba(184,134,11,0.15)] w-full">
      <div className="bg-white dark:bg-[#131926] rounded-[15px] p-5 flex flex-col flex-1 h-full w-full relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(223,171,43,0.15)_0%,transparent_70%)]" />
        <div className="relative z-10 flex flex-col flex-1 justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}

export function BotonAccion({ texto }) {
  return (
    <button className="w-full bg-[#0B0F19] text-white dark:bg-white dark:text-[#0B0F19] font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/btn border border-transparent shadow-sm hover:bg-[#DFAB2B] dark:hover:bg-[#DFAB2B] hover:text-[#0B0F19] dark:hover:text-[#0B0F19] hover:shadow-[0_0_25px_rgba(223,171,43,0.4)]">
      {texto}
      <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
    </button>
  );
}