import React from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2, Truck, CreditCard } from "lucide-react";

export default function CompraProducto({
  setCheckoutOpen,
  pagoCompletado,
  ejecutarPagoSimulado,
  envioDatos,
  setEnvioDatos,
  carrito,
  totalCarrito,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0B0F19]/80 backdrop-blur-lg z-50 flex items-center justify-center p-0 sm:p-6 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        className="bg-white dark:bg-[#131926] text-[#0B0F19] dark:text-white w-full max-w-5xl min-h-screen sm:min-h-0 sm:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 relative"
      >
        <button
          onClick={() => setCheckoutOpen(false)}
          className="absolute top-4 right-4 z-50 bg-slate-100 dark:bg-[#0B0F19] h-10 w-10 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {pagoCompletado ? (
          <div className="col-span-12 p-12 flex flex-col items-center justify-center text-center min-h-[500px]">
            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
              <CheckCircle2 className="h-20 w-20 text-emerald-500 mb-4 animate-bounce" />
            </motion.div>
            <h2 className="text-2xl font-black uppercase tracking-wide">¡Pago Procesado con Éxito!</h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xs">
              Tu pedido ha sido registrado. Regresando a la vista principal para una nueva compra...
            </p>
          </div>
        ) : (
          <>
            <form onSubmit={ejecutarPagoSimulado} className="col-span-12 md:col-span-7 p-6 sm:p-10 space-y-6 overflow-y-auto max-h-[90vh] md:max-h-none">
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">Especificaciones de Despacho</h2>
                <p className="text-xs text-slate-400 mt-1">Completa los campos obligatorios para procesar la venta online de forma segura.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#DFAB2B] flex items-center gap-2">
                  <Truck className="h-4 w-4" /> 1. Información de Envío
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Nombre Completo del Consignatario</label>
                    <input required type="text" value={envioDatos.nombre} onChange={(e) => setEnvioDatos({ ...envioDatos, nombre: e.target.value })} className="w-full text-sm bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#DFAB2B]" placeholder="Ej. Juan Pérez López" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Dirección Exacta de Entrega</label>
                    <input required type="text" value={envioDatos.direccion} onChange={(e) => setEnvioDatos({ ...envioDatos, direccion: e.target.value })} className="w-full text-sm bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#DFAB2B]" placeholder="Av. Larco 123 - Dpto 401" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Ciudad / Región</label>
                    <input required type="text" value={envioDatos.ciudad} onChange={(e) => setEnvioDatos({ ...envioDatos, ciudad: e.target.value })} className="w-full text-sm bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#DFAB2B]" placeholder="Lima" />
                  </div>
                </div>
              </div>

              <hr className="border-slate-100 dark:border-slate-800/60" />

              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#DFAB2B] flex items-center gap-2">
                  <CreditCard className="h-4 w-4" /> 2. Pasarela de Pago Segura
                </h3>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Número de Tarjeta bancaria</label>
                  <input required type="text" maxLength={16} value={envioDatos.tarjeta} onChange={(e) => setEnvioDatos({ ...envioDatos, tarjeta: e.target.value })} className="w-full text-sm bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#DFAB2B]" placeholder="4557 8892 1102 3345" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Expiración (MM/AA)</label>
                    <input required type="text" maxLength={5} value={envioDatos.expiracion} onChange={(e) => setEnvioDatos({ ...envioDatos, expiracion: e.target.value })} className="w-full text-sm bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#DFAB2B]" placeholder="12/28" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Código de Seguridad (CVV)</label>
                    <input required type="password" maxLength={3} value={envioDatos.cvv} onChange={(e) => setEnvioDatos({ ...envioDatos, cvv: e.target.value })} className="w-full text-sm bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#DFAB2B]" placeholder="***" />
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#DFAB2B] text-[#0B0F19] font-black uppercase tracking-widest text-xs py-4 rounded-xl shadow-lg hover:shadow-[#DFAB2B]/20 transition-all active:scale-[0.99] mt-4">
                Pagar e Imprimir Orden
              </button>
            </form>

            <div className="col-span-12 md:col-span-5 bg-slate-50 dark:bg-[#0B0F19]/40 p-6 sm:p-10 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider mb-6">Resumen del Pedido</h3>
                <div className="space-y-4 max-h-[40vh] md:max-h-[50vh] overflow-y-auto pr-2">
                  {carrito.map((item) => (
                    <div key={item.cartItemId} className="flex justify-between items-center gap-4 text-xs font-bold">
                      <span className="text-slate-500 dark:text-slate-400 truncate max-w-[160px]">
                        {item.nombre} <span className="text-[#DFAB2B] font-black">x{item.configuracion.cantidad}</span>
                      </span>
                      <span className="font-extrabold whitespace-nowrap">S/ {(item.precio * item.configuracion.cantidad).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-6 space-y-2">
                <div className="flex justify-between text-xs text-slate-400 font-bold">
                  <span>Costo de Envío</span>
                  <span className="text-emerald-500 uppercase font-black">Gratis</span>
                </div>
                <div className="flex justify-between items-center text-base font-black pt-2">
                  <span>Monto Final Total</span>
                  <span className="text-[#DFAB2B]">S/ {totalCarrito.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}