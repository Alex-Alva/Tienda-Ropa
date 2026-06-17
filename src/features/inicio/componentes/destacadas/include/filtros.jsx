import React from "react";
import { 
  Grid, 
  Layers, 
  Shirt, 
  Scissors, 
  ShoppingBag, 
  Flame, 
  Sparkles 
} from "lucide-react";

const CATEGORIES = [
  { id: "todo", name: "Ver todo", icon: Grid },
  { id: "remeras", name: "Remeras", icon: Shirt },
  { id: "abrigos", name: "Abrigos", icon: Layers },
  { id: "pantalones", name: "Pantalones", icon: Scissors },
  { id: "vestidos", name: "Vestidos", icon: Sparkles },
  { id: "accesorios", name: "Accesorios", icon: ShoppingBag },
  { id: "especiales", name: "Especiales", icon: Flame },
];

export default function FiltrosCategorias({ activeCategory, setActiveCategory }) {
  return (
    <div className="w-full bg-[#F1F3F7] dark:bg-[#1A2333] rounded-2xl p-4 md:p-6 mb-12 shadow-sm transition-colors duration-700">
      <div className="flex items-center justify-start md:justify-center gap-6 md:gap-10 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const IconComponent = cat.icon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex flex-col items-center gap-2 group focus:outline-none shrink-0 transition-transform active:scale-95"
            >
              <div
                className={`h-16 w-16 sm:h-20 sm:w-20 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                  isActive
                    ? "bg-[#F0B100] text-white ring-4 ring-[#F0B100]/20 scale-105 shadow-md"
                    : "bg-[#F8FAFC] dark:bg-[#131926] text-slate-500 dark:text-slate-400 group-hover:scale-105 group-hover:bg-white dark:group-hover:bg-[#1A2333]"
                }`}
              >
                <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 transition-transform ${isActive ? "scale-110" : ""}`} />
              </div>
              
              <span className={`text-xs sm:text-sm font-bold tracking-wide transition-colors ${
                isActive ? "text-[#F0B100] dark:text-[#F0B100]" : "text-slate-500 dark:text-slate-400 group-hover:text-[#0B0F19] dark:group-hover:text-white"
              }`}>
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Exportación opcional de la constante por si el padre necesita usarla para el título dinámico
export { CATEGORIES };