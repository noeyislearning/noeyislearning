import { createSlice } from "@reduxjs/toolkit";

/** Data */
import worksData from "@/assets/data/works.json";

export interface WorkState {
  works: Work[];
}

export interface Work {
  id: number;
  title: string;
  desc: string;
  work_title: string;
  img_url: string;
  redirect_url: string;
  tech_tags: string[];
  is_ongoing: boolean;
  is_latest: boolean;
  version: string;
  data_set_source: string;
  data_set_url: string;
}

const initialState: WorkState = {
  works: worksData.works.map((work) => ({
    ...work,
  })),
};

export const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {},
});

export default workSlice.reducer;