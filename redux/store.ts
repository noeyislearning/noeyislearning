"use client";
import { configureStore } from "@reduxjs/toolkit";
import workReducer from "./works/workSlice";
import textReducer from "./texts/connectWithMeCTASlice";

export const store = configureStore({
  reducer: {
    work: workReducer,
    text: textReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;