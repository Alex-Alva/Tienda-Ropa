import React, { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import FiltrosTestimonios from "./include/filtros";
import ListaTestimonios from "./include/listatestimonios";
import FormularioTestimonio from "./include/formularios/formulariotestimonio";

const INITIAL_REVIEWS_DATA = [
  { id: 1, name: "Valeria Gómez", date: "02 Jun 2026", stars: 5, content: "¡Increíble la calidad de la tela! Compré la campera denim y me calza perfecto." },
  { id: 2, name: "Martín Rodríguez", date: "28 May 2026", stars: 4, content: "Las remeras oversize son comodísimas y el diseño está genial." },
  { id: 3, name: "Camila Fernandez", date: "15 May 2026", stars: 3, content: "El pantalón cargo es lindo, pero demoró dos días más de lo prometido." },
  { id: 4, name: "Lucas Suárez", date: "10 May 2026", stars: 2, content: "El diseño del hoodie me encanta, pero se le hicieron pelotitas tras el primer lavado." },
  { id: 5, name: "Sofía Benítez", date: "01 May 2026", stars: 5, content: "¡Mi tienda favorita desde ahora! El vestido de gasa es hermoso y super fresco." },
  { id: 6, name: "Jorge D.", date: "20 Abr 2026", stars: 0, content: "Tuve un problema con mi pedido, no me enviaron el talle correcto."}
];

export default function Testimonios() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS_DATA);
  const [selectedStars, setSelectedStars] = useState("todos");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const carruselRef = useRef(null);

  // Filtrado reactivo en el renderizado del padre
  const filteredReviews = selectedStars === "todos"
    ? reviews
    : reviews.filter(review => review.stars === Number(selectedStars));

  // Control deslizante manual del carrusel horizontal
  const scrollCarrusel = (direction) => {
    if (carruselRef.current) {
      const { scrollLeft, clientWidth } = carruselRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth * 0.7 
        : scrollLeft + clientWidth * 0.7;
      
      carruselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Callback ejecutado cuando el formulario de la reseña es enviado con éxito
  const handleAddReview = (reviewData) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const today = new Date().toLocaleDateString('es-ES', options).replace(/\./g, '');

    const newReview = {
      id: Date.now(),
      name: reviewData.name,
      date: today,
      stars: reviewData.stars,
      content: reviewData.content
    };

    setReviews([newReview, ...reviews]);
    setIsFormOpen(false); // Cierra el drawer automáticamente
  };

  return (
    <section 
      id="comentarios" 
      className="w-full bg-white dark:bg-[#0B0F19] text-[#0B0F19] dark:text-white py-16 px-4 transition-colors duration-700 overflow-hidden relative"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Encabezado General */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-[#0B0F19] dark:text-white">
            Opiniones de Clientes
          </h2>
          <div className="h-1 w-20 bg-[#F0B100] mx-auto mt-4 rounded-full" />
        </div>

        {/* 1. Componente de Filtros */}
        <FiltrosTestimonios 
          selectedStars={selectedStars} 
          setSelectedStars={setSelectedStars} 
          onOpenForm={() => setIsFormOpen(true)} 
        />

        {/* 2. Componente de Carrusel de Comentarios */}
        <ListaTestimonios
          filteredReviews={filteredReviews} 
          carruselRef={carruselRef} 
          scrollCarrusel={scrollCarrusel} 
        />

      </div>

      {/* 3. Componente de Formulario (Slide-over) */}
      <AnimatePresence>
        {isFormOpen && (
          <FormularioTestimonio 
            isOpen={isFormOpen} 
            onClose={() => setIsFormOpen(false)} 
            onAddReview={handleAddReview} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}