"use client"
import { configureStore } from "@reduxjs/toolkit"

/** Reducers */
import menuReducer from "./menus/reducers"
import userReducer from "./user/reducers"
import socialReducer from "./socials/reducers"
import highlightReducer from "./highlights/reducers"
import educationReducer from "./educations/reducers"
import experienceReducer from "./experiences/reducers"

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
