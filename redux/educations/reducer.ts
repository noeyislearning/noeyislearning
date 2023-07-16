import { createSlice } from "@reduxjs/toolkit";

/** Data */
import educationsData from "@/assets/data/educations.json";

export interface EducationState {
  educs: Educations[];
}

export interface Educations {
  id: number;
  schoolName: string;
  schoolLocation: string;
  schoolLogoImageURL: string;
  degree: string;
  year: {
    started: number;
    ended: number;
  };
  skills: string[];
  description: string;
}

const initialState: EducationState = {
  educs: educationsData.educations.map((educ) => ({
    ...educ,
  })),
};

export const educSlice = createSlice({
  name: "educs",
  initialState,
  reducers: {},
});

export default educSlice.reducer;