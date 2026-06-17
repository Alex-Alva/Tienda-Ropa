import React from "react";
import { motion } from "framer-motion";
import TarjetaNovedad from "./include/TarjetaNovedad";

// Importación de imágenes locales
import ropa from "../../../../assets/ropa.jpg";
import ropita from "../../../../assets/ropita.jpg";

const PRODUCTOS_NOVEDADES = [
  { id: 1, name: "Chaqueta Eco-Cuero Premium", type: "nuevo", tagLabel: "¡Nuevo Ingreso!", price: "$89.99", img: ropa, desc: "Recién llegado a nuestra colección de temporada." },
  { id: 2, name: "Sweater Knit Oversize", type: "quitar", tagLabel: "Últimas Unidades", price: "$34.99", img: ropita, desc: "No habrá reposición de este modelo. ¡Aprovecha!" },
  { id: 3, name: "Pantalón Cargo Urbano", type: "nuevo", tagLabel: "¡Nuevo Ingreso!", price: "$52.00", img: ropa, desc: "Diseño cómodo con bolsillos laterales reforzados." },
  { id: 4, name: "Vestido Floral de Seda", type: "quitar", tagLabel: "Última Oportunidad", price: "$41.99", img: ropita, desc: "Último stock disponible antes de retirarse del catálogo." },
  { id: 5, name: "Camisa Linaje Manga Corta", type: "nuevo", tagLabel: "¡Nuevo Ingreso!", price: "$29.99", img: ropa, desc: "100% lino fresco, ideal para los días cálidos." },
  { id: 6, name: "Campera Bomber Classic", type: "quitar", tagLabel: "Liquidación Final", price: "$45.00", img: ropita, desc: "Últimos talles en stock con descuento especial aplicado." }
];

export default function Novedades() {
  // Configuración de animación para el efecto cascada (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section 
      id="novedades" 
      className="w-full bg-white dark:bg-[#0B0F19] text-[#0B0F19] dark:text-white py-16 px-4 transition-colors duration-700 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Encabezado de la Sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-[#0B0F19] dark:text-white">
            Últimas Novedades
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium mt-3 max-w-xl mx-auto">
            Descubre los ingresos más recientes que acaban de llegar y las piezas exclusivas que están a punto de agotarse.
          </p>
          <div className="h-1 w-20 bg-[#F0B100] mx-auto mt-4 rounded-full" />
        </div>

        {/* Grilla Animada */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PRODUCTOS_NOVEDADES.map((product) => (
            <TarjetaNovedad 
              key={product.id}
              product={product}
              cardVariants={cardVariants}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}