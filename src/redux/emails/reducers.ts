import { createSlice } from "@reduxjs/toolkit"

/** Data */
import emailsData from "@/data/emails.json"
/** Interfaces */
import { EmailState } from "@/types/Email"

const initialState: EmailState = {
  emails: emailsData.emails.map((email) => ({
    ...email,
  })),
}

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
})

export default emailSlice.reducer
