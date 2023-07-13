import { createSlice } from "@reduxjs/toolkit";

/** Data */
import experiencesData from "@/assets/data/experiences.json";

export interface ExpState {
  exps: Exp[];
}

export interface Exp {
  id: number;
  company: string;
  location: string;
  title: string;
  employmentType: string;
  dates: {
    started: string;
    ended: string;
  };
  description: string;
  skills: string[];
}

const initialState: ExpState = {
  exps: experiencesData.experiences.map((exp) => ({
    ...exp,
  })),
};

export const expSlice = createSlice({
  name: "exp",
  initialState,
  reducers: {},
});

export default expSlice.reducer;