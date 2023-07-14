import { createSlice } from "@reduxjs/toolkit";

/** Data */
import toolsData from "@/assets/data/tools.json";

export interface ToolState {
  tools: Tool[];
}

export interface Tool {
  id: number;
  name: string;
  description: string;
  imgURL: string;
}

const initialState: ToolState = {
  tools: toolsData.tools.map((tool) => ({
    ...tool,
  })),
};

export const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {},
});

export default toolSlice.reducer;