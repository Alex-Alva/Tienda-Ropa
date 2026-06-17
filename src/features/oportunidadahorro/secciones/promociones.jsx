import React from "react";
import { motion } from "framer-motion";
import { Truck, Sparkles } from "lucide-react";
import { CardMarcoDorado, BotonAccion } from "../ComponentesAuxiliares";

export default function Promociones() {
  return (
    <motion.div
      key="promociones"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {/* Promo 1: 2x1 */}
      <CardMarcoDorado>
        <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-[#0B0F19] flex items-center justify-center mb-4 border border-slate-200/50 dark:border-slate-800">
          <span className="text-base font-black tracking-tighter">2x1</span>
        </div>
        <h3 className="text-base font-bold tracking-tight mb-1">Duplica tu Estilo</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Lleva dos prendas de la categoría seleccionada y paga solo la de mayor valor. Válido en básicos.</p>
        <BotonAccion texto="Aplicar Combo" />
      </CardMarcoDorado>

      {/* Promo 2: 3er al 50% */}
      <CardMarcoDorado>
        <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-[#0B0F19] flex items-center justify-center mb-4 border border-slate-200/50 dark:border-slate-800">
          <span className="text-sm font-black text-center leading-none">-50%<br/><span className="text-[9px] text-slate-400">EN 3RO</span></span>
        </div>
        <h3 className="text-base font-bold tracking-tight mb-1">3er Producto al 50%</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Arma tu carrito con 3 artículos y obtén de manera automática la tercera unidad a mitad de precio.</p>
        <BotonAccion texto="Armar Carrito" />
      </CardMarcoDorado>

      {/* Promo 3: Envío Gratis */}
      <CardMarcoDorado>
        <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-[#0B0F19] flex items-center justify-center mb-4 border border-slate-200/50 dark:border-slate-800">
          <Truck className="h-5 w-5 text-slate-700 dark:text-slate-300" />
        </div>
        <h3 className="text-base font-bold tracking-tight mb-1">Envío Internacional Gratis</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Por compras a partir de S/ 200.00, te lo enviamos a la puerta de tu casa sin pagar un solo sol adicional.</p>
        <BotonAccion texto="Ver Términos" />
      </CardMarcoDorado>

      {/* Promo 4: Regalos */}
      <CardMarcoDorado>
        <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-[#0B0F19] flex items-center justify-center mb-4 border border-slate-200/50 dark:border-slate-800">
          <Sparkles className="h-5 w-5 text-[#DFAB2B]" />
        </div>
        <h3 className="text-base font-bold tracking-tight mb-1">Beneficio Flexible</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Supera los S/ 100.00 and elige en caja entre recibir un obsequio de la marca o habilitar el envío gratis.</p>
        <BotonAccion texto="Ver Regalos" />
      </CardMarcoDorado>
    </motion.div>
  );
}