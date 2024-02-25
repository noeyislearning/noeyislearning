import { createSlice } from "@reduxjs/toolkit"

/** Data */
import educationsData from "@/data/educations.json"
/** Interfaces */
import { EducationtState } from "@/types/Education"

const initialState: EducationtState = {
  educations: educationsData.educations.map((education) => ({
    ...education,
  })),
}

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
})

export default educationSlice.reducer
