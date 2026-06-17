import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/LOGO.png";

// Importamos Link junto a los hooks de enrutamiento
import { useNavigate, useLocation, Link } from "react-router-dom";

// Importación limpia utilizando únicamente Lucide React
import { 
  Sun, 
  Moon, 
  Menu, 
  Search, 
  X, 
  ChevronDown 
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("normal");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontMenuOpen, setFontMenuOpen] = useState(false);
  const [sectionsOpen, setSectionsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedFont = localStorage.getItem("fontSize") || "normal";
    setTheme(savedTheme);
    setFontSize(savedFont);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.remove("text-sm", "text-lg");
    if (fontSize === "small") document.documentElement.classList.add("text-sm");
    if (fontSize === "large") document.documentElement.classList.add("text-lg");
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const closeAllMenus = () => {
    setMenuOpen(false);
    setFontMenuOpen(false);
    setSectionsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  const handleSectionClick = (hash) => {
    setSectionsOpen(false);
    setMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/", { state: { targetHash: hash } });
    } else {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const linkBase = `
    transition-all duration-300 ease-out 
    hover:scale-105 hover:text-[var(--color-accent-light)] 
    dark:hover:text-[var(--color-accent-dark)] font-semibold cursor-pointer
    ${scrolled ? "text-gray-800 dark:text-white" : "text-white"}
  `;

  const floatingContainerClasses = `
    mt-3 mb-2 rounded-2xl border backdrop-blur-md transition-all duration-500 ease-in-out
    ${
      scrolled
        ? "bg-white/95 dark:bg-[#222222]/90 border-black/10 dark:border-white/10 shadow-lg"
        : "bg-black/25 dark:bg-white/10 border-white/20"
    }
  `;

  const seccionesInternas = [
    { name: "Nosotros", hash: "#nosotros" },
    { name: "Destacados", hash: "#destacados" },
    { name: "Novedades", hash: "#novedades" },
    { name: "Comentarios", hash: "#comentarios" },
    { name: "Contacto", hash: "#contacto" },
  ];

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 w-full"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8 relative">
        <div className={floatingContainerClasses}>
          <nav className="relative flex items-center justify-between h-20 sm:h-24 px-3 sm:px-6 transition-all duration-500 ease-in-out">
            
            {/* --- CONTENEDOR IZQUIERDA: LOGO + NOMBRE TIENDA (DINÁMICO) --- */}
            <div className="flex flex-1 items-center justify-start min-w-0 h-full gap-3 sm:gap-4">
              <button
                onClick={handleLogoClick}
                className="h-14 w-14 sm:h-18 sm:w-18 lg:h-20 lg:w-20
                rounded-[1.1rem] sm:rounded-[1.4rem] lg:rounded-[1.6rem]
                overflow-hidden ring-2 ring-white/70 dark:ring-gray-700 
                shadow-md hover:scale-105 transition-all duration-500 ease-in-out
                flex items-center justify-center bg-black/80 focus:outline-none flex-shrink-0"
                aria-label="Ir al inicio / Subir"
              >
                <img src={logo} alt="Logo Benito" className="h-full w-full object-contain" loading="lazy" />
              </button>

              {/* NOMBRE DE LA TIENDA MEJORADO: 
                - En pantallas grandes (`lg:block`), se posiciona al lado del logo ocupando el espacio izquierdo.
                - En pantallas móviles (`flex-1 text-center`), se auto-centra dinámicamente.
              */}
              <div className="flex-1 lg:flex-none text-center lg:text-left overflow-hidden pr-2 lg:pr-0">
                <span className={`text-base sm:text-xl lg:text-2xl font-black uppercase tracking-wider block truncate transition-colors duration-300 ${
                  scrolled ? "text-gray-900 dark:text-white" : "text-white"
                }`}>
                  ROPA ROPITA
                </span>
              </div>
            </div>

            {/* --- NAVEGACIÓN PRINCIPAL (ESCRITORIO) --- */}
            <div className="hidden lg:flex items-center gap-6 unselectable transition-all duration-300">
              <Link to="/productos" className={linkBase}>Productos</Link>
              <Link to="/ahorro" className={linkBase}>Oportunidad de Ahorro</Link>
              <Link to="/favoritos" className={linkBase}>Favoritos</Link>

              {/* Menú Desplegable Vertical */}
              <div className="relative">
                <button
                  onClick={() => setSectionsOpen(!sectionsOpen)}
                  className={`${linkBase} flex items-center gap-1 bg-transparent border-none`}
                >
                  Secciones <ChevronDown className="h-4 w-4" />
                </button>
                
                <AnimatePresence>
                  {sectionsOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-48 bg-black/90 dark:bg-neutral-900 border border-white/20 rounded-xl p-2 shadow-xl flex flex-col gap-2 z-50 text-sm"
                    >
                      {seccionesInternas.map((sec) => (
                        <li key={sec.name}>
                          <button
                            onClick={() => handleSectionClick(sec.hash)}
                            className="w-full text-left block px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-colors bg-transparent border-none"
                          >
                            {sec.name}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* --- CONTROLES DERECHA (ESCRITORIO) --- */}
            <div className="hidden sm:flex items-center gap-4 flex-shrink-0 ml-4">
              <DarkModeToggle theme={theme} toggleTheme={toggleTheme} scrolled={scrolled} />
              <div className={`border-l h-6 transition-colors duration-300 ${scrolled ? "border-gray-300 dark:border-white/20" : "border-white/30"}`}></div>
              <FontSizeSelector fontSize={fontSize} setFontSize={setFontSize} scrolled={scrolled} />
            </div>

            {/* --- CONTROLES MÓVIL (BOTONCITOS DE ACCIONES) --- */}
            <div className={`flex lg:hidden items-center gap-3 flex-shrink-0 transition-all duration-300 ${scrolled ? "text-gray-800 dark:text-white" : "text-white"}`}> 
              <button
                onClick={() => {
                  setFontMenuOpen((prev) => !prev);
                  setMenuOpen(false);
                  setSectionsOpen(false);
                }}
                className="bg-transparent overflow-hidden hover:scale-105 transition-transform"
                aria-label="Cambiar tamaño de fuente"
              >
                <Search className="h-6 w-6" />
              </button>
              
              <DarkModeToggle theme={theme} toggleTheme={toggleTheme} scrolled={scrolled} />

              <button
                onClick={() => {
                  setMenuOpen((prev) => !prev);
                  setFontMenuOpen(false);
                  setSectionsOpen(false);
                }}
                className="bg-transparent overflow-hidden hover:scale-105 transition-transform"
                aria-label="Abrir menú"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* --- MENÚ DE FUENTE MÓVIL --- */}
        <AnimatePresence>
          {fontMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-4 bg-black/80 text-white rounded-xl p-3 backdrop-blur-md border border-white/20 flex gap-3 z-50"
            >
              <FontSizeSelector fontSize={fontSize} setFontSize={setFontSize} scrolled={false} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- MENÚ PRINCIPAL MÓVIL (VERTICAL) --- */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-black/90 text-white backdrop-blur-md border-t border-white/20 shadow-xl z-50 max-h-[80vh] overflow-y-auto rounded-b-2xl"
            >
              <ul className="flex flex-col items-center gap-3 py-6 text-lg font-semibold">
                <li><Link to="/productos" onClick={closeAllMenus} className="text-yellow-400">Productos</Link></li>
                <li><Link to="/ahorro" onClick={closeAllMenus} className="text-yellow-400">Oportunidad de Ahorro</Link></li>
                <li><Link to="/favoritos" onClick={closeAllMenus} className="text-yellow-400">Favoritos</Link></li>
                
                <div className="w-1/2 border-t border-white/10 my-1"></div>
                
                <p className="text-xs uppercase tracking-wider text-white/40 font-normal mt-1">Secciones internas</p>
                {seccionesInternas.map((sec) => (
                  <li key={sec.name}>
                    <button 
                      onClick={() => handleSectionClick(sec.hash)} 
                      className="hover:text-gray-300 bg-transparent border-none text-white font-semibold text-lg"
                    >
                      {sec.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

/* --- BOTÓN MODO OSCURO --- */
function DarkModeToggle({ theme, toggleTheme, scrolled }) {
  const Icon = theme === "dark" ? Sun : Moon;
  return (
    <button 
      onClick={toggleTheme} 
      className={`bg-transparent overflow-hidden transition-all duration-300 hover:scale-105 ${scrolled ? "text-gray-800 dark:text-white" : "text-white"}`}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
}

/* --- SELECTOR DE TAMAÑO DE FUENTE --- */
function FontSizeSelector({ fontSize, setFontSize, scrolled }) {
  const sizes = [{ label: "A-", value: "small" }, { label: "A", value: "normal" }, { label: "A+", value: "large" }];
  return (
    <div className="flex gap-2">
      {sizes.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setFontSize(value)}
          className={`px-3 py-1 rounded-lg transition-all duration-300 text-sm ${
            fontSize === value 
              ? scrolled 
                ? "bg-gray-800 dark:bg-white/90 text-white dark:text-gray-800 font-bold"
                : "bg-white/90 text-gray-800 font-bold" 
              : scrolled
                ? "bg-transparent text-gray-500 dark:text-white/70 hover:text-gray-800 dark:hover:text-white"
                : "bg-transparent text-white/70 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}