import React from "react";
import GridProductos from "../GridProductos";

export default function Adolescentes({ productos, favoritos, toggleFavorito, setProductoSeleccionado }) {
  return (
    <GridProductos
      productos={productos.filter((p) => p.categoria === "adolescentes")}
      favoritos={favoritos}
      toggleFavorito={toggleFavorito}
      setProductoSeleccionado={setProductoSeleccionado}
    />
  );
}