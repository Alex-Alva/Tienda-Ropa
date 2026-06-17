import React from "react";
import { Tag, Gift, Percent } from "lucide-react";

export default function Filtros({ tabActiva, setTabActiva }) {
  const tabs = [
    { id: "ofertas", label: "Ofertas", icon: Tag },
    { id: "promociones", label: "Promociones", icon: Gift },
    { id: "descuentos", label: "Descuentos", icon: Percent }
  ];

  return (
    <>
      {/* Encabezado de la Sección */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider mb-2">
          Oportunidades de Ahorro
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Maximiza el valor de tus compras con nuestras exclusivas dinámicas de beneficios y colecciones especiales.
        </p>
      </div>

      {/* Barra de Filtros */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#F1F3F7] dark:bg-[#1A2333] p-1 rounded-full flex gap-1 border border-black/[0.03] dark:border-white/[0.03]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setTabActiva(tab.id)}
                className={`px-5 sm:px-8 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2 ${
                  tabActiva === tab.id
                    ? "bg-[#0B0F19] text-white dark:bg-white dark:text-[#0B0F19] shadow-md scale-102"
                    : "text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}