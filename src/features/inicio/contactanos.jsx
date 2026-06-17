import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  MessageSquare, 
  Send,
  CheckCircle2,
  X
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contacto() {
  // Estados para el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejo del envío
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    
    // Activar el mensaje de confirmación
    setIsSubmitted(true);
    
    // Resetear el formulario
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    
    // Ocultar el mensaje automáticamente después de 4 segundos
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  // Configuración de animaciones
  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    /* 1. FONDO GENERAL: Modo Claro: #FFFFFF | Modo Oscuro: #0B0F19 */
    <section 
      id="contacto" 
      className="w-full bg-white dark:bg-[#0B0F19] text-[#0B0F19] dark:text-white py-16 px-4 transition-colors duration-700 overflow-hidden relative"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Título de la Sección */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {/* Título Principal en Contraste Máximo (#0B0F19 / #FFFFFF) */}
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-widest uppercase text-[#0B0F19] dark:text-white">
            Contacto
          </h2>
          <div className="h-1 w-20 bg-[#F0B100] mx-auto mt-3 rounded-full" />
          {/* Descripciones secundarias en tono neutro suavizado (slate-500 / slate-400) */}
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold mt-4 max-w-md mx-auto leading-relaxed">
            Déjanos tus datos y nuestro equipo especializado se comunicará contigo a la brevedad.
          </p>
        </motion.div>

        {/* Contenedor en Dos Columnas */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          
          {/* COLUMNA DE REDES SOCIALES (4 Columnas) */}
          <motion.div className="lg:col-span-4 space-y-6" variants={fadeInUp}>
            {/* Tarjeta de Redes: Gris Ultra Claro (#F8FAFC) o Gris Azulado Oscuro (#131926) */}
            <div className="relative group/social bg-[#F8FAFC] dark:bg-[#131926] p-6 rounded-2xl border border-black/[0.03] dark:border-white/[0.02] shadow-sm overflow-hidden transition-all duration-500">
              
              {/* Glow Premium Oro Soft en Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover/social:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                style={{ background: "radial-gradient(circle at center, rgba(240, 177, 0, 0.08) 0%, rgba(240, 177, 0, 0) 70%)" }}
              />

              <h3 className="relative z-10 text-lg font-extrabold text-[#0B0F19] dark:text-white mb-5">Síguenos</h3>
              
              <div className="relative z-10 space-y-5">
                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#F1F3F7] dark:bg-[#1A2333] flex items-center justify-center text-[#F0B100] group-hover:bg-[#F0B100] group-hover:text-white transition-all duration-300 shrink-0">
                    <FaInstagram className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Instagram</p>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#F0B100] dark:group-hover:text-[#F0B100] transition-colors">@tu_empresa</span>
                  </div>
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#F1F3F7] dark:bg-[#1A2333] flex items-center justify-center text-[#F0B100] group-hover:bg-[#F0B100] group-hover:text-white transition-all duration-300 shrink-0">
                    <FaFacebook className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Facebook</p>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#F0B100] dark:group-hover:text-[#F0B100] transition-colors">Tu Empresa Oficial</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#F1F3F7] dark:bg-[#1A2333] flex items-center justify-center text-[#F0B100] group-hover:bg-[#F0B100] group-hover:text-white transition-all duration-300 shrink-0">
                    <FaLinkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">LinkedIn</p>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#F0B100] dark:group-hover:text-[#F0B100] transition-colors">company/tu-empresa</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Cuadro de Horario - Contenedor Inverso: Azul Noche (#0B0F19) o Gris Azulado Flotante (#1A2333) */}
            <div className="bg-[#0B0F19] dark:bg-[#1A2333] text-white p-6 rounded-2xl border border-white/[0.02] shadow-md relative overflow-hidden">
              <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-[#F0B100]/10 rounded-full blur-xl pointer-events-none" />
              <h4 className="text-xs uppercase tracking-widest font-black text-[#F0B100] mb-2 relative z-10">Tiempo de Respuesta</h4>
              <p className="text-xs text-slate-300 font-medium leading-relaxed relative z-10">
                Procesamos todas las solicitudes en un rango menor a 24 horas hábiles. Nuestro equipo de soporte técnico y comercial está activo de Lunes a Viernes.
              </p>
            </div>
          </motion.div>

          {/* COLUMNA DEL FORMULARIO (8 Columnas) */}
          <motion.div className="lg:col-span-8" variants={fadeInUp}>
            {/* Formulario principal: Gris Ultra Claro (#F8FAFC) o Gris Azulado Oscuro (#131926) */}
            <form 
              onSubmit={handleSubmit}
              className="bg-[#F8FAFC] dark:bg-[#131926] p-6 sm:p-8 rounded-2xl border border-black/[0.03] dark:border-white/[0.02] shadow-sm space-y-5 transition-colors duration-700"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Input Nombre */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-[#F0B100]" /> Nombre Completo
                  </label>
                  <input 
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Ana García"
                    required
                    className="w-full bg-white dark:bg-[#1A2333] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F0B100] dark:focus:border-[#F0B100] focus:ring-4 focus:ring-[#F0B100]/5 transition-all text-[#0B0F19] dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>

                {/* Input Teléfono */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                    <span className="text-[#F0B100] font-black text-sm">#</span> Teléfono de Contacto
                  </label>
                  <input 
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Ej. +51 987 654 321"
                    className="w-full bg-white dark:bg-[#1A2333] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F0B100] dark:focus:border-[#F0B100] focus:ring-4 focus:ring-[#F0B100]/5 transition-all text-[#0B0F19] dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Input Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="text-[#F0B100] font-black text-sm">@</span> Correo Electrónico
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nombre@correo.com"
                  required
                  className="w-full bg-white dark:bg-[#1A2333] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F0B100] dark:focus:border-[#F0B100] focus:ring-4 focus:ring-[#F0B100]/5 transition-all text-[#0B0F19] dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                />
              </div>

              {/* Input Mensaje */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-[#F0B100]" /> ¿En qué podemos ayudarte?
                </label>
                <textarea 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Escribe tu consulta o los detalles del servicio..."
                  required
                  className="w-full bg-white dark:bg-[#1A2333] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F0B100] dark:focus:border-[#F0B100] focus:ring-4 focus:ring-[#F0B100]/5 transition-all text-[#0B0F19] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none"
                />
              </div>

              {/* Botón Enviar */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0B0F19] dark:bg-white text-white dark:text-[#0B0F19] hover:bg-[#F0B100] dark:hover:bg-[#F0B100] hover:text-white dark:hover:text-white font-extrabold uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl transition-all transform active:scale-95 flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="h-4 w-4" /> Enviar Mensaje
                </button>
              </div>
            </form>
          </motion.div>

        </motion.div>
      </div>

      {/* ==================== MENSÁJITO DE CONFIRMACIÓN FLOTANTE (Toast) ==================== */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#0B0F19] text-white border border-emerald-500/30 p-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
            <div className="flex-1">
              <h5 className="text-xs font-black text-white uppercase tracking-wider">¡Envío exitoso!</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Recibimos tus datos. Te contactaremos muy pronto.</p>
            </div>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-slate-500 hover:text-white transition-colors p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}