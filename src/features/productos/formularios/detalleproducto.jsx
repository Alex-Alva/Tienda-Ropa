import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Minus, Plus, ShoppingCart, Info } from "lucide-react";

export default function DetalleProducto({ producto, onClose, onConfirm }) {
  // Estados para las especificaciones requeridas
  const [cantidad, setCantidad] = useState(1);
  const [talla, setTalla] = useState("M");
  const [color, setColor] = useState("Negro");
  const [material, setMaterial] = useState("Algodón Pima");
  const [largo, setLargo] = useState("Estándar");

  if (!producto) return null;

  // Variantes de datos simulados según el producto (puedes expandir esto)
  const TALLAS = ["S", "M", "L", "XL"];
  const COLORES = [
    { nombre: "Negro", hex: "#000000" },
    { nombre: "Blanco", hex: "#FFFFFF" },
    { nombre: "Azul Marino", hex: "#1E293B" },
    { nombre: "Gris Oxford", hex: "#64748B" }
  ];
  const MATERIALES = ["Algodón Pima", "Gabardina Stretch", "Felpa Premium", "Satinado"];
  const LARGOS = ["Corto", "Estándar", "Largo"];

  const handleAgregar = () => {
    onConfirm({
      ...producto,
      configuracion: { cantidad, talla, color, material, largo }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop de fondo oscurecido */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0B0F19]/60 backdrop-blur-md"
      />

      {/* Tarjeta del Modal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white dark:bg-[#131926] text-[#0B0F19] dark:text-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-black/[0.05] dark:border-white/[0.05] relative z-10 flex flex-col md:flex-row"
      >
        {/* Botón de Cierre Absoluto */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-[#F8FAFC] dark:bg-[#1A2333] border border-slate-200/60 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-[#0B0F19] dark:hover:text-white transition-colors active:scale-90"
        >
          <X className="h-5 w-5" />
        </button>

        {/* COLUMNA IZQUIERDA: Visualización e Imagen */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-[#F8FAFC] dark:bg-[#0B0F19]/50">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-900 shadow-sm">
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              className="w-full h-full object-cover object-center"
            />
            <span className="absolute bottom-4 left-4 bg-[#0B0F19]/90 dark:bg-white/90 text-white dark:text-[#0B0F19] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg backdrop-blur-sm">
              {producto.estilo}
            </span>
          </div>
        </div>

        {/* COLUMNA DERECHA: Configuración de Atributos */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800/60">
          
          <div className="space-y-6">
            {/* Encabezado */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#0B0F19] dark:text-white mb-1">
                {producto.nombre}
              </h2>
              <p className="text-lg font-black text-[#DFAB2B]">
                S/ {producto.precio.toFixed(2)}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                {producto.desc}
              </p>
            </div>

            <hr className="border-slate-100 dark:border-slate-800" />

            {/* Selector de Talla */}
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-2">
                Selecciona tu Talla
              </span>
              <div className="flex flex-wrap gap-2">
                {TALLAS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTalla(t)}
                    className={`h-11 px-4 text-xs font-bold rounded-xl transition-all border ${
                      talla === t
                        ? "bg-[#0B0F19] border-[#0B0F19] text-white dark:bg-white dark:border-white dark:text-[#0B0F19] shadow-md"
                        : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de Color */}
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-2">
                Color: <span className="text-slate-700 dark:text-slate-300 capitalize">{color}</span>
              </span>
              <div className="flex gap-3">
                {COLORES.map((c) => (
                  <button
                    key={c.nombre}
                    onClick={() => setColor(c.nombre)}
                    style={{ backgroundColor: c.hex }}
                    title={c.nombre}
                    className={`h-8 w-8 rounded-full border-2 transition-all relative ${
                      color === c.nombre
                        ? "border-[#DFAB2B] scale-110 shadow-md"
                        : "border-slate-300 dark:border-slate-700 hover:scale-105"
                    }`}
                  >
                    {c.hex === "#FFFFFF" && (
                      <div className="absolute inset-0 rounded-full border border-slate-200 pointer-events-none" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Selectores Dropdown: Material y Largo */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-2">
                  Material
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full bg-[#F8FAFC] dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 focus:outline-none focus:border-[#DFAB2B]"
                >
                  {MATERIALES.map((mat) => (
                    <option key={mat} value={mat}>{mat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-2">
                  Largo de Prenda
                </label>
                <select
                  value={largo}
                  onChange={(e) => setLargo(e.target.value)}
                  className="w-full bg-[#F8FAFC] dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 focus:outline-none focus:border-[#DFAB2B]"
                >
                  {LARGOS.map((lg) => (
                    <option key={lg} value={lg}>{lg}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contador de Cantidad */}
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-2">
                Cantidad deseada
              </span>
              <div className="inline-flex items-center bg-[#F8FAFC] dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-xl p-1.5">
                <button
                  onClick={() => setCantidad((prev) => Math.max(1, prev - 1))}
                  className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-12 text-center text-sm font-black text-[#0B0F19] dark:text-white">
                  {cantidad}
                </span>
                <button
                  onClick={() => setCantidad((prev) => prev + 1)}
                  className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Botón Confirmar Acción en el Carrito */}
          <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60">
            <button
              onClick={handleAgregar}
              className="w-full bg-[#0B0F19] text-white dark:bg-white dark:text-[#0B0F19] hover:bg-[#DFAB2B] dark:hover:bg-[#DFAB2B] hover:text-[#0B0F19] dark:hover:text-[#0B0F19] font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_25px_rgba(223,171,43,0.3)] transform active:scale-[0.98]"
            >
              <ShoppingCart className="h-4 w-4" /> Confirmar y Añadir a la Bolsa
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}