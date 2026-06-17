import React from "react";
import { ShoppingCart } from "lucide-react";

export default function CarritoModal({ totalItems, setCartOpen }) {
  return (
    <button
      onClick={() => setCartOpen(true)}
      className="fixed bottom-6 right-6 z-40 bg-[#DFAB2B] text-[#0B0F19] h-14 w-14 rounded-full flex items-center justify-center shadow-2xl border border-white/20 active:scale-95 hover:scale-110 transition-transform duration-300"
      aria-label="Ver bolsa de compras"
    >
      <div className="relative">
        <ShoppingCart className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-black h-5 w-5 rounded-full flex items-center justify-center animate-pulse">
            {totalItems}
          </span>
        )}
      </div>
    </button>
  );
}