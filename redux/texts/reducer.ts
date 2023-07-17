import { createSlice } from "@reduxjs/toolkit";

/** Data */
import connectWithMeCTA from "@/assets/data/texts.json";

export interface TextState {
  connectWithMeCTA: string;
}

const initialState: TextState = {
  connectWithMeCTA: connectWithMeCTA.texts.connectWithMeCTA.content,
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {},
});

export default textSlice.reducer;
