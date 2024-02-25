import { createSlice } from "@reduxjs/toolkit"

/** Data */
import socialData from "@/data/socials.json"
/** Interfaces */
import { SocialState } from "@/types/Social"

const initialState: SocialState = {
  socials: socialData.socials.map((social) => ({
    ...social,
  })),
}

export const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {},
})

export default socialSlice.reducer
