import React from "react";
import { Search } from "lucide-react";

export default function Filtros({
  categoriaActiva,
  searchQuery,
  setSearchQuery,
  prendaSelect,
  setPrendaSelect,
  estiloSelect,
  setEstiloSelect,
}) {
  return (
    <div className="mb-10 grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-6 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder={`Buscar prendas en ${categoriaActiva}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#F8FAFC] dark:bg-[#131926] border border-slate-200/80 dark:border-slate-800/80 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-slate-400 dark:focus:border-slate-600 transition-colors"
        />
      </div>

      <div className="md:col-span-3">
        <select
          value={prendaSelect}
          onChange={(e) => setPrendaSelect(e.target.value)}
          className="w-full bg-[#F8FAFC] dark:bg-[#131926] border border-slate-200/80 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none text-slate-600 dark:text-slate-300 capitalize"
        >
          <option value="todos">Todas las Prendas</option>
          <option value="polos">Polos</option>
          <option value="pantalones">Pantalones</option>
          <option value="casacas">Casacas</option>
          <option value="sacos">Sacos</option>
        </select>
      </div>

      <div className="md:col-span-3">
        <select
          value={estiloSelect}
          onChange={(e) => setEstiloSelect(e.target.value)}
          className="w-full bg-[#F8FAFC] dark:bg-[#131926] border border-slate-200/80 dark:border-slate-800/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none text-slate-600 dark:text-slate-300 capitalize"
        >
          <option value="todos">Todos los Estilos</option>
          <option value="formal">Formal</option>
          <option value="deportivo">Deportivo</option>
        </select>
      </div>
    </div>
  );
}