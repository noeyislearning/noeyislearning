// buttons/reducer.ts
import { createSlice } from '@reduxjs/toolkit';

export interface MenuButtonState {
  isMenuOpen: boolean;
}

const initialState: MenuButtonState = {
  isMenuOpen: false,
};

export const menuButtonSlice = createSlice({
  name: 'menuButton',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = menuButtonSlice.actions;

export default menuButtonSlice.reducer;
