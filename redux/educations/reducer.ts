import { createSlice } from "@reduxjs/toolkit";

/** Data */
import educationsData from "@/assets/data/educations.json";

export interface EducationState {
  educations: Educ[];
}

export interface Educ {
  id: number;
  degree_course: string;
  school_name: string;
  school_url: string;
  location: string;
  start_date: string;
  end_date: string;
  desc: string[];
  skills: string[];
}

const initialState: EducationState = {
  educations: educationsData.educations.map((educ) => ({
    ...educ,
  })),
};

export const educSlice = createSlice({
  name: "educations",
  initialState,
  reducers: {},
});

export default educSlice.reducer;