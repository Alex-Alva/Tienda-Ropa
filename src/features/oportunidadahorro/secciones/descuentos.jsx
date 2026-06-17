import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { CardMarcoDorado } from "../ComponentesAuxiliares";

export default function Descuentos() {
  const listaDescuentos = [
    { porcentaje: "10%", antes: 100, ahora: 90, ahorro: 10, item: "Polo Básicos" },
    { porcentaje: "20%", antes: 150, ahora: 120, ahorro: 30, item: "Jogger Knit" },
    { porcentaje: "30%", antes: 200, ahora: 140, ahorro: 60, item: "Casaca Varsity" },
    { porcentaje: "40%", antes: 300, ahora: 180, ahorro: 120, item: "Blazer Sastre" },
  ];

  return (
    <motion.div
      key="descuentos"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {listaDescuentos.map((desc, idx) => (
        <CardMarcoDorado key={idx}>
          {/* Badge de Descuento */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold tracking-wide text-slate-400 capitalize">{desc.item}</span>
            <span className="bg-[#DFAB2B] text-[#0B0F19] text-xs font-black px-2.5 py-0.5 rounded-md">
              {desc.percentage || desc.porcentaje} OFF
            </span>
          </div>

          {/* Desglose de Precios */}
          <div className="bg-[#F8FAFC] dark:bg-[#0B0F19] rounded-xl p-4 mb-5 flex flex-col gap-2 border border-slate-100 dark:border-slate-900">
            <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
              <span>Antes:</span>
              <span className="line-through font-medium">S/ {desc.antes.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center text-sm font-bold text-[#0B0F19] dark:text-white">
              <span>Ahora:</span>
              <span className="text-base font-black">S/ {desc.ahora.toFixed(2)}</span>
            </div>

            <div className="border-t border-dashed border-slate-200 dark:border-slate-800 pt-2 flex justify-between items-center text-xs font-bold text-[#DFAB2B]">
              <span>Ahorro Neto:</span>
              <span>S/ {desc.ahorro.toFixed(2)}</span>
            </div>
          </div>

          {/* Botón de Compra */}
          <button
            onClick={() => console.log(`Añadido descuento de ${desc.item}`)}
            className="w-full bg-[#0B0F19] text-white dark:bg-white dark:text-[#0B0F19] font-bold text-xs uppercase tracking-widest py-3 rounded-xl transition-colors hover:bg-[#DFAB2B] dark:hover:bg-[#DFAB2B] hover:text-[#0B0F19] dark:hover:text-[#0B0F19] flex items-center justify-center gap-2 shadow-sm"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Aprovechar
          </button>
        </CardMarcoDorado>
      ))}
    </motion.div>
  );
}