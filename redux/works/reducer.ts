import { createSlice } from "@reduxjs/toolkit";

/** Data */
import worksData from "@/assets/data/works.json";

export interface WorkState {
  works: Work[];
}

export interface Work {
  id: number;
  name: string;
  description: string;
  imgURL: string;
  technologyUsed: string[];
  redirectURL: string;
}

const initialState: WorkState = {
  works: worksData.works.map((work) => ({
    id: work.id,
    name: work.name,
    description: work.description,
    imgURL: work.imgURL,
    technologyUsed: work.technologyUsed,
    redirectURL: work.redirectURL,
  })),
};

export const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {},
});

export default workSlice.reducer;