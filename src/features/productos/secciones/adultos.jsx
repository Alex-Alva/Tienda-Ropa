import React from "react";
import GridProductos from "../GridProductos";

export default function Adultos({ productos, favoritos, toggleFavorito, setProductoSeleccionado }) {
  return (
    <GridProductos
      productos={productos.filter((p) => p.categoria === "adultos")}
      favoritos={favoritos}
      toggleFavorito={toggleFavorito}
      setProductoSeleccionado={setProductoSeleccionado}
    />
  );
}