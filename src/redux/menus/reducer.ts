import { createSlice } from "@reduxjs/toolkit"

/** Data */
import menuData from "@/data/menus.json"
/** Interfaces */
import { MenuState } from "@/types/Menu"

const initialState: MenuState = {
  menus: menuData.menus.map((menu) => ({
    ...menu,
  })),
}

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
})

export default menuSlice.reducer
