"use client";
import { configureStore } from "@reduxjs/toolkit";

/** Reducers */
import menuReducer from "./menus/reducer";
import menuButtonReducer from "./buttons/reducer";

export const store = configureStore({
  reducer: {
    // menu: menuReducer,
    menuButton: menuButtonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;