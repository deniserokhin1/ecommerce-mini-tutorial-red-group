import { configureStore, Store } from "@reduxjs/toolkit";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productApi } from "./product/product.api";

export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

export type TypeRootState = ReturnType<typeof store.getState>;
