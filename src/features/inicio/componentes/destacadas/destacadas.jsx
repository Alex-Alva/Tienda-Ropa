import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FiltrosCategorias, { CATEGORIES } from "./include/filtros";
import CardProductos from "./include/productoscard";

// Importación de imágenes locales
import ropa from "../../../../assets/ropa.jpg";
import ropita from "../../../../assets/ropita.jpg";

const PRODUCTOS_ROPA = [
  { id: 1, name: "Remera Oversize Algodón", category: "remeras", price: "$25.00", img: ropa },
  { id: 2, name: "Campera Denim Premium", category: "abrigos", price: "$75.00", img: ropita },
  { id: 3, name: "Jean Slim Fit Elasticado", category: "pantalones", price: "$45.00", img: ropa },
  { id: 4, name: "Vestido de Gasa Verano", category: "vestidos", price: "$60.00", img: ropita },
  { id: 5, name: "Gorra Trucker Urbana", category: "accesorios", price: "$18.00", img: ropa },
  { id: 6, name: "Hoodie Edición Limitada", category: "especiales", price: "$65.00", img: ropita },
];

export default function Destacadas() {
  const [activeCategory, setActiveCategory] = useState("todo");

  // Lógica de filtrado delegada de forma eficiente en el render del Padre
  const filteredProducts = activeCategory === "todo"
    ? PRODUCTOS_ROPA
    : PRODUCTOS_ROPA.filter(p => p.category === activeCategory);

  const currentCategoryObj = CATEGORIES.find(c => c.id === activeCategory);
  const titleDisplay = currentCategoryObj ? `ROPA ${currentCategoryObj.name}` : "DESTACADOS";

  return (
    <section 
      id="destacados" 
      className="w-full bg-white dark:bg-[#0B0F19] text-[#0B0F19] dark:text-white py-16 px-4 transition-colors duration-700"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Componente Modular de Filtros */}
        <FiltrosCategorias 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {/* Título Dinámico Central */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight uppercase transition-colors duration-700 text-[#0B0F19] dark:text-white">
            {titleDisplay}
          </h2>
          <div className="h-1 w-16 bg-[#F0B100] mx-auto mt-3 rounded-full" />
        </div>

        {/* Componente Modular de Contenido envuelto en AnimatePresence */}
        <div className="min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <CardProductos 
              productos={filteredProducts} 
              activeCategory={activeCategory} 
            />
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}