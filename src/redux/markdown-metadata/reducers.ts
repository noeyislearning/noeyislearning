import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  metadata: {},
}

export const metadataSlice = createSlice({
  name: "metadata",
  initialState,
  reducers: {
    setMetadata: (state, action) => {
      state.metadata = action.payload
    },
  },
})

export const { setMetadata } = metadataSlice.actions

export default metadataSlice.reducer
