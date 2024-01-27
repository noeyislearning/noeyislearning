// buttons/reducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
