import { configureStore } from "@reduxjs/toolkit";

import asideReducer from "./management/asideSlice";
import tournamnentReducer from "./management/tournamentSlice";

export const store = configureStore({
  reducer: {
    asideStore: asideReducer,
    tournamentStore: tournamnentReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
