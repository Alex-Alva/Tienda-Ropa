import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail,
  Target,      // Misión
  Eye,         // Visión
  Gem,         // Valores
  ShieldCheck, // Garantía/Seguridad
  Truck,       // Despachos
  Clock        // Soporte/Atención
} from "lucide-react";

export default function Nosotros() {
  // Configuración de animaciones de scroll suaves
  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    /* 1. FONDO GENERAL: Modo Claro: #FFFFFF | Modo Oscuro: #0B0F19 */
    <section 
      id="nosotros" 
      className="w-full bg-white dark:bg-[#0B0F19] text-[#0B0F19] dark:text-white py-16 px-4 transition-colors duration-700 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* ==================== 1. ENCABEZADO Y STORYTELLING ==================== */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#F0B100] bg-[#F0B100]/10 px-3 py-1.5 rounded-lg">
              Nuestra Esencia
            </span>
            {/* Títulos Principales en Contraste Máximo (#0B0F19 / #FFFFFF) */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B0F19] dark:text-white mt-4 leading-tight">
              Diseñamos Moda con Propósito y Elegancia
            </h2>
            <div className="h-1 w-20 bg-[#F0B100] mt-4 rounded-full" />
            
            {/* Descripciones en tonos neutros suavizados (slate-500 / slate-400) */}
            <p className="text-base text-slate-500 dark:text-slate-400 font-medium mt-6 leading-relaxed">
              Nacimos con la firme convicción de transformar el guardarropa de nuestros clientes, ofreciendo prendas exclusivas que combinan las últimas tendencias globales con materiales de primera calidad. Nos obsesiona el calce perfecto, la durabilidad y la creación de piezas que cuenten una historia propia.
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400 font-medium mt-4 leading-relaxed">
              Para nosotros, la moda no es solo vestir bien; es una herramienta de expression personal, seguridad y confianza que te acompaña en cada paso de tu día.
            </p>
          </div>

          {/* Bloque de Métricas/Stats - Contenedor: Gris Ultra Claro (#F8FAFC) o Gris Azulado Oscuro (#131926) */}
          <div className="relative group/metrics grid grid-cols-2 gap-6 bg-[#F8FAFC] dark:bg-[#131926] p-8 rounded-2xl shadow-sm border border-black/[0.03] dark:border-white/[0.02] overflow-hidden transition-all duration-500">
            
            {/* Glow Premium Oro Soft en Hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover/metrics:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
              style={{ background: "radial-gradient(circle at center, rgba(240, 177, 0, 0.08) 0%, rgba(240, 177, 0, 0) 70%)" }}
            />

            <div className="relative z-10 text-center p-4 border-b border-r border-[#F1F3F7] dark:border-[#1A2333]">
              <h3 className="text-4xl sm:text-5xl font-black text-[#F0B100]">5+</h3>
              <p className="text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-2">Años en el Mercado</p>
            </div>
            <div className="relative z-10 text-center p-4 border-b border-[#F1F3F7] dark:border-[#1A2333]">
              <h3 className="text-4xl sm:text-5xl font-black text-[#0B0F19] dark:text-white">10K+</h3>
              <p className="text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-2">Clientes Felices</p>
            </div>
            <div className="relative z-10 text-center p-4 border-r border-[#F1F3F7] dark:border-[#1A2333]">
              <h3 className="text-4xl sm:text-5xl font-black text-[#0B0F19] dark:text-white">100%</h3>
              <p className="text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-2">Algodón Premium</p>
            </div>
            <div className="relative z-10 text-center p-4">
              <h3 className="text-4xl sm:text-5xl font-black text-[#F0B100]">24h</h3>
              <p className="text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-2">Despacho Rápido</p>
            </div>
          </div>
        </motion.div>


        {/* ==================== 2. MISIÓN, VISIÓN Y VALORES ==================== */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Misión */}
          <motion.div 
            variants={fadeInUp} 
            className="group relative bg-[#F8FAFC] dark:bg-[#131926] p-8 rounded-2xl shadow-sm border border-black/[0.03] dark:border-white/[0.02] flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
              style={{ background: "radial-gradient(circle at center, rgba(240, 177, 0, 0.08) 0%, rgba(240, 177, 0, 0) 70%)" }}
            />
            <div className="relative z-10 h-14 w-14 bg-[#F1F3F7] dark:bg-[#1A2333] text-[#F0B100] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="relative z-10 text-xl font-extrabold text-[#0B0F19] dark:text-white mb-3">Nuestra Misión</h3>
            <p className="relative z-10 text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Proveer indumentaria de alta calidad que potencie la autenticidad y seguridad de cada persona, asegurando una experiencia de compra transparente, ágil y centrada completamente en la satisfacción del cliente.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div 
            variants={fadeInUp} 
            className="group relative bg-[#F8FAFC] dark:bg-[#131926] p-8 rounded-2xl shadow-sm border border-black/[0.03] dark:border-white/[0.02] flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
              style={{ background: "radial-gradient(circle at center, rgba(240, 177, 0, 0.08) 0%, rgba(240, 177, 0, 0) 70%)" }}
            />
            <div className="relative z-10 h-14 w-14 bg-[#F1F3F7] dark:bg-[#1A2333] text-[#0B0F19] dark:text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="relative z-10 text-xl font-extrabold text-[#0B0F19] dark:text-white mb-3">Nuestra Visión</h3>
            <p className="relative z-10 text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Consolidarnos como la tienda e-commerce líder en moda y diseño textil de la región, reconocida por nuestra innovación en la cadena estética premium, empaques sustentables y altos estándares éticos.
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div 
            variants={fadeInUp} 
            className="group relative bg-[#F8FAFC] dark:bg-[#131926] p-8 rounded-2xl shadow-sm border border-black/[0.03] dark:border-white/[0.02] flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
              style={{ background: "radial-gradient(circle at center, rgba(240, 177, 0, 0.08) 0%, rgba(240, 177, 0, 0) 70%)" }}
            />
            <div className="relative z-10 h-14 w-14 bg-[#F1F3F7] dark:bg-[#1A2333] text-[#F0B100] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Gem className="h-7 w-7" />
            </div>
            <h3 className="relative z-10 text-xl font-extrabold text-[#0B0F19] dark:text-white mb-3">Valores Centrales</h3>
            <ul className="relative z-10 text-sm text-slate-500 dark:text-slate-400 font-bold space-y-2 mt-1">
              <li className="flex items-center justify-center gap-2">• Calidad Incomprometible</li>
              <li className="flex items-center justify-center gap-2">• Transparencia Absoluta</li>
              <li className="flex items-center justify-center gap-2">• Pasión por el Detalle</li>
              <li className="flex items-center justify-center gap-2">• Compromiso Sostenible</li>
            </ul>
          </motion.div>
        </motion.div>


        {/* ==================== 3. COMPROMISOS / SELLOS DE CONFIANZA ==================== */}
        {/* Contenedor Destacado Inverso: Azul Noche / Negro Profundo (#0B0F19) en Claro | Aislado con (#1A2333) en Oscuro */}
        <motion.div 
          className="w-full bg-[#0B0F19] dark:bg-[#1A2333] text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-lg relative overflow-hidden transition-colors duration-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {/* Detalles de fondo de diseño premium */}
          <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-[#F0B100]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#F0B100]">Comprar Aquí es Seguro</h3>
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-2">Protegemos tu experiencia de inicio a fin con políticas claras.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center relative z-10">
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-10 w-10 text-[#F0B100] mb-3" />
              <h4 className="font-extrabold text-base">Garantía de Satisfacción</h4>
              <p className="text-xs text-slate-400 font-medium mt-2 max-w-xs leading-relaxed">¿No te quedó el talle o no es lo que esperabas? Tienes cambios gratis durante los primeros 30 días.</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="h-10 w-10 text-[#F0B100] mb-3" />
              <h4 className="font-extrabold text-base">Despacho Rastreado</h4>
              <p className="text-xs text-slate-400 font-medium mt-2 max-w-xs leading-relaxed">Todos nuestros paquetes salen con código de seguimiento en tiempo real directo a tu WhatsApp.</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-10 w-10 text-[#F0B100] mb-3" />
              <h4 className="font-extrabold text-base">Soporte Humano Dedicado</h4>
              <p className="text-xs text-slate-400 font-medium mt-2 max-w-xs leading-relaxed">Nada de bots confusos. Nuestro equipo de atención te atiende de forma personalizada al instante.</p>
            </div>
          </div>
        </motion.div>

        {/* ==================== 4. UBICACIÓN, GOOGLE MAPS Y CONTACTO ==================== */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          {/* Tarjeta de Datos de Contacto (4 Columnas) */}
          <div className="group/showroom relative lg:col-span-4 bg-[#F8FAFC] dark:bg-[#131926] p-8 rounded-2xl shadow-sm border border-black/[0.03] dark:border-white/[0.02] flex flex-col justify-between overflow-hidden transition-all duration-500">
            
            <div className="absolute inset-0 opacity-0 group-hover/showroom:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
              style={{ background: "radial-gradient(circle at center, rgba(240, 177, 0, 0.08) 0%, rgba(240, 177, 0, 0) 70%)" }}
            />

            <div className="relative z-10">
              <h3 className="text-xl font-extrabold text-[#0B0F19] dark:text-white mb-2">Visita Nuestro Showroom</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-8">Ven a probarte tus prendas favoritas</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#F0B100] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0B0F19] dark:text-white">Dirección Principal</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Av. Alfredo Mendiola 3520, Los Olivos, Lima, Perú</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#F0B100] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0B0F19] dark:text-white">Línea de Atención</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">+51 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#F0B100] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0B0F19] dark:text-white">Consultas y Soporte</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">contacto@tuempresa.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#F1F3F7] dark:border-[#1A2333] text-xs text-slate-400 dark:text-slate-500 font-bold transition-colors duration-700">
              Horario: Lun a Sáb de 09:00 AM a 08:00 PM
            </div>
          </div>

          {/* Contenedor de Google Maps Enmarcado (8 Columnas) */}
          <div className="lg:col-span-8 bg-[#F8FAFC] dark:bg-[#131926] p-2 rounded-2xl shadow-sm border border-black/[0.03] dark:border-white/[0.02] min-h-[350px] overflow-hidden group transition-all duration-500">
            <iframe
              title="Ubicación Google Maps de la empresa"
              src="https://maps.google.com/maps?q=Av.%20Alfredo%20Mendiola%203520,%20Los%20Olivos,%20Lima&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[350px] rounded-xl border-0 grayscale dark:invert-[0.9] dark:hue-rotate-180 contrast-[1.1] group-hover:grayscale-0 transition-all duration-500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}