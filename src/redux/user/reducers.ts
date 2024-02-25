import { createSlice } from "@reduxjs/toolkit"

/** Data */
import userData from "@/data/user.json"
/** Interfaces */
import { UserState } from "@/types/User"

const initialState: UserState = {
  user: userData,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
})

export default userSlice.reducer
