"use client";
import { configureStore } from "@reduxjs/toolkit";

import workReducer from "./works/reducer";
import socialReducer from "./socials/reducer";
import expReducer from "./experiences/reducer";

export const store = configureStore({
  reducer: {
    work: workReducer,
    social: socialReducer,
    exp: expReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
