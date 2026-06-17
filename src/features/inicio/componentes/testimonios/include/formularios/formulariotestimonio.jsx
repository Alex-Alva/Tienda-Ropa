import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquarePlus, X, Star, Smile, Meh, Frown, Angry } from "lucide-react";

export default function FormularioTestimonio({ isOpen, onClose, onAddReview }) {
  const [newName, setNewName] = useState("");
  const [newStars, setNewStars] = useState(5);
  const [newContent, setNewContent] = useState("");
  const [hoverStars, setHoverStars] = useState(null);

  const getReviewEmoji = (stars) => {
    if (stars >= 4) return <Smile className="h-6 w-6 text-emerald-500 shrink-0" />;
    if (stars === 3) return <Meh className="h-6 w-6 text-amber-500 shrink-0" />;
    if (stars >= 1) return <Frown className="h-6 w-6 text-orange-500 shrink-0" />;
    return <Angry className="h-6 w-6 text-rose-500 shrink-0" />;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newContent.trim()) return;

    onAddReview({
      name: newName,
      stars: newStars,
      content: newContent,
    });

    // Limpieza
    setNewName("");
    setNewStars(5);
    setNewContent("");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Fondo oscuro translúcido (Overlay) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black z-40 cursor-pointer"
      />

      {/* Panel Lateral Deslizable */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 bottom-0 w-full sm:w-[450px] bg-white dark:bg-[#131926] border-l border-black/5 dark:border-white/5 shadow-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto"
      >
        <div>
          {/* Cabecera del Panel */}
          <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/5 mb-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-[#0B0F19] dark:text-white flex items-center gap-2">
              <MessageSquarePlus className="h-5 w-5 text-[#F0B100]" /> Tu Opinión Cuenta
            </h3>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-[#0B0F19] dark:hover:text-white p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo: Nombre */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-extrabold text-slate-500 dark:text-slate-400">
                Nombre Completo / Apodo
              </label>
              <input 
                type="text" 
                required
                placeholder="Ej. Valeria G."
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-[#F8FAFC] dark:bg-[#0B0F19] border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0B0F19] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#F0B100] transition-colors font-medium"
              />
            </div>

            {/* Campo: Selector de Estrellas Interactivo */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-extrabold text-slate-500 dark:text-slate-400 block">
                Calificación ({newStars} {newStars === 1 ? 'estrella' : 'estrellas'})
              </label>
              <div className="flex items-center gap-3 bg-[#F8FAFC] dark:bg-[#0B0F19] border border-black/5 dark:border-white/10 rounded-xl px-4 py-3">
                <div className="mr-2 transition-all duration-300">
                  {getReviewEmoji(hoverStars ?? newStars)}
                </div>
                
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((starIndex) => {
                    const activeColor = starIndex <= (hoverStars ?? newStars);
                    return (
                      <button
                        key={starIndex}
                        type="button"
                        onClick={() => setNewStars(starIndex)}
                        onMouseEnter={() => setHoverStars(starIndex)}
                        onMouseLeave={() => setHoverStars(null)}
                        className="text-[#F0B100] transition-transform active:scale-90"
                      >
                        <Star 
                          className={`h-6 w-6 transition-all ${
                            activeColor 
                              ? "fill-current drop-shadow-[0_0_4px_rgba(240,177,0,0.3)]" 
                              : "text-slate-300 dark:text-slate-700"
                          }`} 
                        />
                      </button>
                    );
                  })}
                </div>

                {newStars === 0 && (
                  <span className="text-[10px] uppercase font-bold text-rose-500 ml-auto">Pésimo</span>
                )}
              </div>
            </div>

            {/* Campo: Comentario */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-extrabold text-slate-500 dark:text-slate-400">
                Tu Reseña
              </label>
              <textarea 
                required
                rows={5}
                placeholder="Cuéntanos sobre la calidad, el talle, el envío..."
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full bg-[#F8FAFC] dark:bg-[#0B0F19] border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0B0F19] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#F0B100] transition-colors font-medium resize-none"
              />
            </div>

            {/* Botón de Envío */}
            <button
              type="submit"
              className="w-full bg-[#0B0F19] dark:bg-white text-white dark:text-[#0B0F19] hover:bg-[#F0B100] dark:hover:bg-[#F0B100] hover:text-white dark:hover:text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md active:scale-[0.98]"
            >
              Publicar Opinión
            </button>
          </form>
        </div>

        <p className="text-[11px] text-slate-400 text-center mt-6">
          Tu reseña se publicará de forma inmediata para ayudar a otros compradores de la comunidad.
        </p>
      </motion.div>
    </>
  );
}