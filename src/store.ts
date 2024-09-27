import { configureStore } from "@reduxjs/toolkit";
import asideReducer from "./management/asideSlice";

export const store = configureStore({
  reducer: {
    asideStore: asideReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
