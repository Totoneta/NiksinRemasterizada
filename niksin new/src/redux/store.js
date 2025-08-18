import { configureStore } from "@reduxjs/toolkit";
import filtrosSlice from "./reducers";

export const store = configureStore({
  reducer: {
    filtros: filtrosSlice,
  },
});
