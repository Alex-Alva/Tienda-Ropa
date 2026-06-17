import React, { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

import DetalleProducto from "../features/productos/formularios/detalleproducto";
import Filtros from "../features/productos/filtros";
import CarritoModal from "../features/productos/carritomodal";
import CheckCarrito from "../features/productos/formularios/checkcarrito";
import CompraProducto from "../features/productos/formularios/compraproducto";
import Adultos from "../features/productos/secciones/adultos";
import Adolescentes from "../features/productos/secciones/adolescentes";
import Infantes from "../features/productos/secciones/infantes";

const PRODUCTOS_DATA = [
  { id: 1, nombre: "Polo Pima Premium", categoria: "adultos", prenda: "polos", estilo: "formal", precio: 89.00, imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80", desc: "Algodón pima peruano con un corte entallado y acabado sedoso." },
  { id: 2, nombre: "Pantalón Chino Slim", categoria: "adultos", prenda: "pantalones", estilo: "formal", precio: 149.00, imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80", desc: "Pantalón de gabardina stretch ideal para la oficina o eventos." },
  { id: 8, nombre: "Blazer Sastre Estructurado", categoria: "adultos", prenda: "sacos", estilo: "formal", precio: 289.00, imagen: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80", desc: "Forro interior satinado y solapas pulidas para una presencia imponente." },
  { id: 3, nombre: "Casaca Varsity Urbana", categoria: "adolescentes", prenda: "casacas", estilo: "deportivo", precio: 199.00, imagen: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=500&q=80", desc: "Diseño oversized retro con parches bordados de alta densidad." },
  { id: 4, nombre: "Jogger Knit Confort", categoria: "adolescentes", prenda: "pantalones", estilo: "deportivo", precio: 119.00, imagen: "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=500&q=80", desc: "Jogger de felpa premium con cordones ajustables." },
  { id: 5, nombre: "Polera Fleece Kids", categoria: "infantes", prenda: "poleras", estilo: "deportivo", precio: 79.00, imagen: "https://images.unsplash.com/photo-1604467731651-bc2eaf3f84d5?w=500&q=80", desc: "Polera abrigadora con interior reactivo, ultra suave para la piel." }
];

export default function Productos() {
  const [categoriaActiva, setCategoriaActiva] = useState("adultos");
  const [searchQuery, setSearchQuery] = useState("");
  const [prendaSelect, setPrendaSelect] = useState("todos");
  const [estiloSelect, setEstiloSelect] = useState("todos");
  const [favoritos, setFavoritos] = useState([]);
  
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const [envioDatos, setEnvioDatos] = useState({ nombre: "", direccion: "", ciudad: "", tarjeta: "", expiracion: "", cvv: "" });
  const [pagoCompletado, setPagoCompletado] = useState(false);

  const toggleFavorito = (id) => {
    setFavoritos((prev) => prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]);
  };

  const productosFiltrados = useMemo(() => {
    return PRODUCTOS_DATA.filter((item) => {
      const matchCategoria = item.categoria === categoriaActiva;
      const matchSearch = (item.nombre || "").toLowerCase().includes(searchQuery.toLowerCase());
      const matchPrenda = prendaSelect === "todos" || item.prenda === prendaSelect;
      const matchEstilo = estiloSelect === "todos" || item.estilo === estiloSelect;
      return matchCategoria && matchSearch && matchPrenda && matchEstilo;
    });
  }, [categoriaActiva, searchQuery, prendaSelect, estiloSelect]);

  const handleConfirmarCarrito = (productoConfigurado) => {
    setCarrito((prevCart) => {
      const itemExiste = prevCart.find(
        (item) => 
          item.id === productoConfigurado.id && 
          item.configuracion.talla === productoConfigurado.configuracion.talla &&
          item.configuracion.color === productoConfigurado.configuracion.color
      );
      if (itemExiste) {
        return prevCart.map((item) => 
          item.id === productoConfigurado.id && 
          item.configuracion.talla === productoConfigurado.configuracion.talla &&
          item.configuracion.color === productoConfigurado.configuracion.color
            ? { ...item, configuracion: { ...item.configuracion, cantidad: item.configuracion.cantidad + productoConfigurado.configuracion.cantidad } }
            : item
        );
      }
      return [...prevCart, { ...productoConfigurado, cartItemId: Date.now() }];
    });
    setProductoSeleccionado(null);
    setCartOpen(true);
  };

  const actualizarCantidad = (cartItemId, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    setCarrito((prev) => prev.map((item) => item.cartItemId === cartItemId ? { ...item, configuracion: { ...item.configuracion, cantidad: nuevaCantidad } } : item));
  };

  const eliminarDelCarrito = (cartItemId) => {
    setCarrito((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const totalCarrito = useMemo(() => carrito.reduce((sum, item) => sum + (item.precio * item.configuracion.cantidad), 0), [carrito]);
  const totalItems = useMemo(() => carrito.reduce((sum, item) => sum + item.configuracion.cantidad, 0), [carrito]);

  const ejecutarPagoSimulado = (e) => {
    e.preventDefault();
    setPagoCompletado(true);
    setTimeout(() => {
      setCarrito([]);
      setCheckoutOpen(false);
      setCartOpen(false);
      setPagoCompletado(false);
      setEnvioDatos({ nombre: "", direccion: "", ciudad: "", tarjeta: "", expiracion: "", cvv: "" });
    }, 2500);
  };

  return (
    <section className="w-full bg-white text-[#0B0F19] dark:bg-[#0B0F19] dark:text-white py-12 px-4 sm:px-6 transition-colors duration-500 min-h-screen font-sans relative">
      
      <CarritoModal totalItems={totalItems} setCartOpen={setCartOpen} />

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="bg-[#F1F3F7] dark:bg-[#1A2333] p-1 rounded-full flex gap-1 border border-black/[0.03] dark:border-white/[0.03]">
            {["adultos", "adolescentes", "infantes"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategoriaActiva(cat);
                  setPrendaSelect("todos");
                  setEstiloSelect("todos");
                }}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                  categoriaActiva === cat
                    ? "bg-[#0B0F19] text-white dark:bg-white dark:text-[#0B0F19] shadow-md"
                    : "text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <Filtros
          categoriaActiva={categoriaActiva}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          prendaSelect={prendaSelect}
          setPrendaSelect={setPrendaSelect}
          estiloSelect={estiloSelect}
          setEstiloSelect={setEstiloSelect}
        />

        {categoriaActiva === "adultos" && (
          <Adultos productos={productosFiltrados} favoritos={favoritos} toggleFavorito={toggleFavorito} setProductoSeleccionado={setProductoSeleccionado} />
        )}
        {categoriaActiva === "adolescentes" && (
          <Adolescentes productos={productosFiltrados} favoritos={favoritos} toggleFavorito={toggleFavorito} setProductoSeleccionado={setProductoSeleccionado} />
        )}
        {categoriaActiva === "infantes" && (
          <Infantes productos={productosFiltrados} favoritos={favoritos} toggleFavorito={toggleFavorito} setProductoSeleccionado={setProductoSeleccionado} />
        )}

        {productosFiltrados.length === 0 && (
          <div className="text-center py-16 max-w-md mx-auto">
            <SlidersHorizontal className="h-6 w-6 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-400">No hay prendas que coincidan con los filtros.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {productoSeleccionado && (
          <DetalleProducto producto={productoSeleccionado} onClose={() => setProductoSeleccionado(null)} onConfirm={handleConfirmarCarrito} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && (
          <CheckCarrito
            carrito={carrito}
            setCartOpen={setCartOpen}
            actualizarCantidad={actualizarCantidad}
            eliminarDelCarrito={eliminarDelCarrito}
            totalItems={totalItems}
            totalCarrito={totalCarrito}
            setCheckoutOpen={setCheckoutOpen}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {checkoutOpen && (
          <CompraProducto
            setCheckoutOpen={setCheckoutOpen}
            pagoCompletado={pagoCompletado}
            ejecutarPagoSimulado={ejecutarPagoSimulado}
            envioDatos={envioDatos}
            setEnvioDatos={setEnvioDatos}
            carrito={carrito}
            totalCarrito={totalCarrito}
          />
        )}
      </AnimatePresence>
    </section>
  );
}