import { createSlice } from "@reduxjs/toolkit"

/** Data */
import highlightsData from "@/data/highlights.json"
/** Interfaces */
import { HighlightState } from "@/types/Highlight"

const initialState: HighlightState = {
  highlights: highlightsData.highlights.map((highlight) => ({
    ...highlight,
  })),
}

export const highlightSlice = createSlice({
  name: "highlight",
  initialState,
  reducers: {},
})

export default highlightSlice.reducer
