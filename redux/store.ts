"use client";
import { configureStore } from "@reduxjs/toolkit";
import workReducer from "./works/reducer";
import textReducer from "./texts/reducer";
import socialReducer from "./socials/reducer";
import menuReducer from "./menu/reducer";
import expReducer from "./experiences/reducer";
import toolReducer from "./tools/reducer";

export const store = configureStore({
  reducer: {
    work: workReducer,
    text: textReducer,
    social: socialReducer,
    menu: menuReducer,
    exp: expReducer,
    tool: toolReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;