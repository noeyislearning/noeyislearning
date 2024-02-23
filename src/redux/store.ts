"use client"
import { configureStore } from "@reduxjs/toolkit"

/** Reducers */
import menuReducer from "./menus/reducer"
import userReducer from "./user/reducer"
import socialReducer from "./socials/reducer"
import highlightReducer from "./highlights/reducer"
import educationReducer from "./educations/reducer"
import experienceReducer from "./experiences/reducer"

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    user: userReducer,
    social: socialReducer,
    highlight: highlightReducer,
    education: educationReducer,
    experience: experienceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
