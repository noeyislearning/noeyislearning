import { createSlice } from "@reduxjs/toolkit";

/** Data */
import socialsData from "@/assets/data/socials.json";

export interface SocialState {
  socials: Social[];
}

export interface Social {
  id: number;
  name: string;
  url: string;
}

const initialState: SocialState = {
  socials: socialsData.socials.map((social) => ({
    ...social,
  })),
};

export const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {},
});

export default socialSlice.reducer;