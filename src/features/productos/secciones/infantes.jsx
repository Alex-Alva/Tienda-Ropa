import React from "react";
import GridProductos from "../GridProductos";

export default function Infantes({ productos, favoritos, toggleFavorito, setProductoSeleccionado }) {
  return (
    <GridProductos
      productos={productos.filter((p) => p.categoria === "infantes")}
      favoritos={favoritos}
      toggleFavorito={toggleFavorito}
      setProductoSeleccionado={setProductoSeleccionado}
    />
  );
}