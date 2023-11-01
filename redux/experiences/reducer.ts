import { createSlice } from "@reduxjs/toolkit";

/** Data */
import experiencesData from "@/assets/data/experiences.json";

export interface ExpState {
  exps: Exp[];
}

export interface Exp {
  id: number;
  position: string;
  company: string;
  company_url: string;
  location: string;
  start_date: string;
  end_date: string;
  desc: string[];
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