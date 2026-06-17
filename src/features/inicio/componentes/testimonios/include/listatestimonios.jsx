import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Smile, Meh, Frown, Angry } from "lucide-react";

export default function ListaTestimonios({ filteredReviews, carruselRef, scrollCarrusel }) {
  
  // Helper interno para renderizar emojis según estrellas
  const getReviewEmoji = (stars) => {
    if (stars >= 4) return <Smile className="h-6 w-6 text-emerald-500 shrink-0" />;
    if (stars === 3) return <Meh className="h-6 w-6 text-amber-500 shrink-0" />;
    if (stars >= 1) return <Frown className="h-6 w-6 text-orange-500 shrink-0" />;
    return <Angry className="h-6 w-6 text-rose-500 shrink-0" />;
  };

  return (
    <div className="relative w-full group">
      <button
        onClick={() => scrollCarrusel("left")}
        className="absolute left-[-15px] sm:left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-[#F8FAFC] dark:bg-[#131926] border border-black/5 dark:border-white/5 text-slate-500 dark:text-slate-400 p-2.5 rounded-full shadow-lg hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 transition-all duration-300"
        aria-label="Comentarios anteriores"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={3} />
      </button>

      <div
        ref={carruselRef}
        className="w-full flex gap-6 overflow-x-auto py-4 px-2 scroll-smooth scrollbar-none snap-x snap-mandatory"
      >
        <AnimatePresence mode="popLayout">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group/card w-[290px] sm:w-[360px] shrink-0 bg-[#F8FAFC] dark:bg-[#131926] border border-black/[0.03] dark:border-white/[0.02] p-6 rounded-2xl shadow-sm flex flex-col justify-between snap-start hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{ background: "radial-gradient(circle at center, rgba(240, 177, 0, 0.08) 0%, rgba(240, 177, 0, 0) 70%)" }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      {getReviewEmoji(review.stars)}
                      <div className="flex flex-col">
                        <h4 className="text-sm sm:text-base font-extrabold text-[#0B0F19] dark:text-white line-clamp-1">
                          {review.name}
                        </h4>
                        <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold tracking-wide">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-0.5 text-[#F0B100] mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        className={`h-4 w-4 ${index < review.stars ? "fill-current" : "text-[#F1F3F7] dark:text-[#1A2333]"}`} 
                      />
                    ))}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic line-clamp-4">
                    "{review.content}"
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full text-center py-12">
              <p className="text-slate-400 dark:text-slate-500 font-medium">
                No hay opiniones con este puntaje por el momento.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={() => scrollCarrusel("right")}
        className="absolute right-[-15px] sm:right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-[#F8FAFC] dark:bg-[#131926] border border-black/5 dark:border-white/5 text-slate-500 dark:text-slate-400 p-2.5 rounded-full shadow-lg hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 transition-all duration-300"
        aria-label="Siguientes comentarios"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={3} />
      </button>
    </div>
  );
}