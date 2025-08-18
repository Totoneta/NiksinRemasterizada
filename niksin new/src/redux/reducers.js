import { createSlice } from "@reduxjs/toolkit";
import { productos } from "../data/productos"; 

const initialState = {
  productos: productos,
  productosFiltrados: productos, 
  filtros: {
    precioMaximo: 10000,
    categoria: "nada",
    material: "nada",
  },
};

const filtrosSlice = createSlice({
  name: "filtros",
  initialState,
  reducers: {
    aplicarFiltros: (state, action) => {
      const { precioMaximo, categoria, material } = action.payload;

      state.productosFiltrados = state.productos.filter((producto) => {
        const cumplePrecio = producto.precio <= precioMaximo;
        const cumpleCategoria = categoria === "nada" || producto.categoria === categoria;
        const cumpleMaterial = material === "nada" || producto.material === material;

        return cumplePrecio && cumpleCategoria && cumpleMaterial;
      });

      state.filtros = action.payload;
    },

    limpiarFiltros: (state) => {
      state.productosFiltrados = state.productos;
      state.filtros = {
        precioMaximo: 10000,
        categoria: "nada",
        material: "nada",
      };
    },
  },
});

export const { aplicarFiltros, limpiarFiltros } = filtrosSlice.actions;
export default filtrosSlice.reducer;
