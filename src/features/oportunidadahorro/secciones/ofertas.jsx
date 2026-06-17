import React from "react";
import { motion } from "framer-motion";
import { CardMarcoDorado, BotonAccion } from "../ComponentesAuxiliares";

export default function Ofertas() {
  return (
    <motion.div
      key="ofertas"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {/* Card 1: Colaboración Especial */}
      <CardMarcoDorado>
        <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-[#0B0F19] rounded-xl overflow-hidden mb-4">
          <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80" alt="Colab" className="w-full h-full object-cover" />
          <span className="absolute top-3 left-3 bg-[#0B0F19] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md">COLABORACIÓN EXCLUSIVA</span>
        </div>
        <h3 className="text-lg font-bold tracking-tight mb-1">X x Streetwear Brand</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Edición ultra limitada diseñada en conjunto con artistas urbanos locales. Stock de lanzamiento disponible.</p>
        <BotonAccion texto="Ver Colección" />
      </CardMarcoDorado>

      {/* Card 2: Liquidación de Temporada */}
      <CardMarcoDorado>
        <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-[#0B0F19] rounded-xl overflow-hidden mb-4">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80" alt="Liquidacion" className="w-full h-full object-cover" />
          <span className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md">ÚLTIMAS UNIDADES</span>
        </div>
        <h3 className="text-lg font-bold tracking-tight mb-1">Liquidación de Temporada</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Prendas seleccionadas con hasta el 60% de descuento final por renovación de inventario. No vuelven.</p>
        <BotonAccion texto="Explorar Outlet" />
      </CardMarcoDorado>

      {/* Card 3: Campaña de Productos Limitados */}
      <CardMarcoDorado>
        <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-[#0B0F19] rounded-xl overflow-hidden mb-4">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" alt="Campaña" className="w-full h-full object-cover" />
          <span className="absolute top-3 left-3 bg-amber-600 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md">CÁPSULA LIMITADA</span>
        </div>
        <h3 className="text-lg font-bold tracking-tight mb-1">Campaña Essentials</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Línea minimalista premium fabricada bajo demanda ecológica. Numerada y con empaque de autor.</p>
        <BotonAccion texto="Comprar Cápsula" />
      </CardMarcoDorado>
    </motion.div>
  );
}