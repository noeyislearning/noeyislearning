"use client";
import { configureStore } from "@reduxjs/toolkit";

/** Reducers */
import menuReducer from "./menus/reducer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;