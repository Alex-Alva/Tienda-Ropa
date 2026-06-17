import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ShoppingBag, X, Minus, Plus } from "lucide-react";

export default function CheckCarrito({
  carrito,
  setCartOpen,
  actualizarCantidad,
  eliminarDelCarrito,
  totalItems,
  totalCarrito,
  setCheckoutOpen,
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setCartOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50"
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.35 }}
        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-[#131926] shadow-2xl z-50 flex flex-col text-[#0B0F19] dark:text-white"
      >
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-[#DFAB2B]" />
            <h2 className="text-lg font-black uppercase tracking-wider">Tu Bolsa</h2>
            <span className="bg-slate-100 dark:bg-slate-800 text-xs px-2.5 py-1 rounded-md font-bold">
              {totalItems}
            </span>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {carrito.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-400">
              <ShoppingBag className="h-12 w-12 mb-3 stroke-1" />
              <p className="text-sm font-medium">Bolsa de compras vacía</p>
            </div>
          ) : (
            carrito.map((item) => (
              <div
                key={item.cartItemId}
                className="flex gap-4 p-3 bg-slate-50 dark:bg-[#0B0F19]/40 rounded-xl relative border border-slate-100 dark:border-slate-800/60"
              >
                <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                  <img src={item.imagen} alt={item.nombre} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between pr-6">
                  <div>
                    <h4 className="text-sm font-bold truncate max-w-[180px]">{item.nombre}</h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase mt-0.5">
                      Talla: {item.configuracion.talla} | Color: {item.configuracion.color}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 rounded-lg p-1 scale-90 origin-left">
                      <button
                        onClick={() => actualizarCantidad(item.cartItemId, item.configuracion.cantidad - 1)}
                        className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-3 text-xs font-black">{item.configuracion.cantidad}</span>
                      <button
                        onClick={() => actualizarCantidad(item.cartItemId, item.configuracion.cantidad + 1)}
                        className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="text-sm font-extrabold">
                      S/ {(item.precio * item.configuracion.cantidad).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => eliminarDelCarrito(item.cartItemId)}
                  className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {carrito.length > 0 && (
          <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-[#131926]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase font-black tracking-wider text-slate-400">Subtotal Neto</span>
              <span className="text-xl font-black text-[#DFAB2B]">S/ {totalCarrito.toFixed(2)}</span>
            </div>
            <button
              onClick={() => setCheckoutOpen(true)}
              className="w-full bg-[#0B0F19] text-white dark:bg-white dark:text-[#0B0F19] py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#DFAB2B] dark:hover:bg-[#DFAB2B] hover:text-[#0B0F19] dark:hover:text-[#0B0F19] transition-all duration-300 shadow-md"
            >
              Proceder a Comprar
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
}