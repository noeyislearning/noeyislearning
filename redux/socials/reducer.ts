import { createSlice } from "@reduxjs/toolkit";

import socialsData from "@/assets/data/socials.json";

export interface Social {
  id: number;
  name: string;
  redirect_url: string;
  is_active: boolean;
}

export interface SocialState {
  learnings: Social[];
  coding_challenges: Social[];
}

const initialState: SocialState = {
  learnings: socialsData.socials.learnings,
  coding_challenges: socialsData.coding_challenges,
};

export const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {},
});

export default socialSlice.reducer;