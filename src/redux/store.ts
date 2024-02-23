"use client"
import { configureStore } from "@reduxjs/toolkit"

/** Reducers */
import menuReducer from "./menus/reducer"
import userReducer from "./user/reducer"
import socialReducer from "./socials/reducer"
import highlightReducer from "./highlights/reducer"

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    user: userReducer,
    social: socialReducer,
    highlight: highlightReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
