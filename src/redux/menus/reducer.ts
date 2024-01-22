import { createSlice } from "@reduxjs/toolkit";

/** Data */
import menuData from "@/assets/data/menus.json";

export interface MenuState {
  menus: Menu[];
}

export interface Menu {
  id: number;
  name: string;
  description: string;
  link: string;
  menu_img_URL: string;
  is_active: boolean;
  is_available: boolean;
  category: string;
}

const initialState: MenuState = {
  menus: menuData.menus.map((menu) => ({
    ...menu,
    is_active: false,
    is_available: true,
  })),
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActive: (state, action) => {
      const { id, isActive } = action.payload;
      const index = state.menus.findIndex((menu) => menu.id === id);
      state.menus[index].is_active = isActive;
    },
    setAvailable: (state, action) => {
      const { id, isAvailable } = action.payload;
      const index = state.menus.findIndex((menu) => menu.id === id);
      state.menus[index].is_available = isAvailable;
    },
  },
});

export default menuSlice.reducer;

