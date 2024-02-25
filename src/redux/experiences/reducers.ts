import { createSlice } from "@reduxjs/toolkit"

/** Data */
import experiencesData from "@/data/experiences.json"
/** Interfaces */
import { ExperienceState } from "@/types/Experience"

const initialState: ExperienceState = {
  experiences: experiencesData.experiences.map((e) => ({
    ...e,
  })),
}

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
})

export default experienceSlice.reducer
