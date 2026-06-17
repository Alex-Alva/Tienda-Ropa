import React from "react";
import { 
  ShoppingBag, 
  Truck, 
  RotateCcw, 
  HelpCircle, 
  Mail,  
  CreditCard 
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Informacion() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-white/5 pt-16 pb-8 px-4 font-sans tracking-wide">
      <div className="mx-auto max-w-7xl">
        
        {/* Grilla Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Columna 1: Identidad de la Marca y Propuesta de Valor */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                <ShoppingBag className="h-6 w-6 text-[#F0B100]" />
                <span className="text-xl font-black tracking-widest uppercase">
                  Studio<span className="text-[#F0B100]">.</span>Core
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed max-w-sm">
                Diseños contemporáneos y materiales premium. Creamos prendas esenciales que trascienden las temporadas con un enfoque sustentable y urbano.
              </p>
            </div>

            {/* Cuadro de Beneficios de Compra */}
            <div className="bg-slate-900/50 border border-white/5 rounded-xl p-4 max-w-sm spacing-y-3">
              <div className="flex items-center gap-3 text-xs mb-2">
                <Truck className="h-4 w-4 text-[#F0B100]" />
                <div>
                  <p className="text-white font-semibold">Envío gratis</p>
                  <p className="text-[11px] text-slate-500">En compras superiores a $99</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <RotateCcw className="h-4 w-4 text-[#F0B100]" />
                <div>
                  <p className="text-white font-semibold">Devoluciones simples</p>
                  <p className="text-[11px] text-slate-500">Hasta 30 días para cambios</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Categorías de Tienda */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-black text-white mb-4 flex items-center gap-1.5">
              Colecciones
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#new" className="hover:text-[#F0B100] transition-colors">Lo Nuevo</a></li>
              <li><a href="#hombre" className="hover:text-[#F0B100] transition-colors">Hombre</a></li>
              <li><a href="#mujer" className="hover:text-[#F0B100] transition-colors">Mujer</a></li>
              <li><a href="#accesorios" className="hover:text-[#F0B100] transition-colors">Accesorios</a></li>
              <li><a href="#sales" className="hover:text-red-400 transition-colors font-bold">Ofertas %</a></li>
            </ul>
          </div>

          {/* Columna 3: Soporte y Ayuda */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-black text-white mb-4 flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5 text-[#F0B100]" /> Ayuda
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#seguimiento" className="hover:text-[#F0B100] transition-colors">Seguir Pedido</a></li>
              <li><a href="#envios" className="hover:text-[#F0B100] transition-colors">Costos de Envío</a></li>
              <li><a href="#cambios" className="hover:text-[#F0B100] transition-colors">Cambios y Garantías</a></li>
              <li><a href="#tallas" className="hover:text-[#F0B100] transition-colors">Guía de Tallas</a></li>
              <li><a href="#contacto" className="hover:text-[#F0B100] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 4: Newsletter de Moda */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-black text-white mb-2 flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#F0B100]" /> Únete al Club
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Recibe un 10% de descuento en tu primera compra, acceso anticipado a drops exclusivos y ventas privadas.
              </p>
            </div>

            {/* Formulario de Suscripción */}
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input 
                type="email" 
                placeholder="tu-email@domain.com" 
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#F0B100]/50 transition-colors"
                required
              />
              <button 
                type="submit"
                className="bg-white hover:bg-slate-200 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl transition-all active:scale-95 shrink-0"
              >
                Unirme
              </button>
            </form>
            <p className="text-[10px] text-slate-600 font-medium">
              Al suscribirte, aceptas recibir correos de marketing. Puedes darte de baja en cualquier momento.
            </p>
          </div>

        </div>

        {/* Separador Fino */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Barra Inferior Legal y Métodos de Pago */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-medium text-slate-500">
          
          {/* Copy y Enlaces Legales */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {currentYear} Studio.Core. Todos los derechos reservados.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <div className="flex gap-3">
              <a href="#privacidad" className="hover:text-slate-400 transition-colors">Privacidad</a>
              <a href="#terminos" className="hover:text-slate-400 transition-colors">Términos</a>
            </div>
          </div>

          {/* Métodos de Pago Simbolizados (Estética Limpia) */}
          <div className="flex items-center gap-3 text-slate-600">
            <span className="text-[10px] uppercase tracking-wider font-bold mr-1">Pagos Seguros:</span>
            <CreditCard className="h-4 w-4" title="Tarjetas de Crédito" />
            <span className="font-mono text-[10px] border border-slate-800 px-1.5 py-0.5 rounded text-slate-400">VISA</span>
            <span className="font-mono text-[10px] border border-slate-800 px-1.5 py-0.5 rounded text-slate-400">MC</span>
            <span className="font-mono text-[10px] border border-slate-800 px-1.5 py-0.5 rounded text-slate-400">PPAL</span>
          </div>

          {/* Redes Sociales Reales de Tienda */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <FaInstagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
              <FaFacebook className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
              <FaTwitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}