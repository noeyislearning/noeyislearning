import { createSlice, combineReducers } from "@reduxjs/toolkit";

/** Data */
import menuData from "@/assets/data/menu.json";

export interface ExploreState {
  explores: Explore[];
}

export interface LegalState {
  legals: Legal[];
}

export interface Explore {
  id: number;
  name: string;
  url: string;
  isAllowed: boolean;
  icon: string;
  status: string;
}

export interface Legal {
  id: number;
  name: string;
  url: string;
  isAllowed: boolean;
  status: string;
}

const initialState: ExploreState & LegalState = {
  explores: menuData.menu.explore.map((explore) => ({
    ...explore,
  })),
  legals: menuData.menu.legal.map((legal) => ({
    ...legal,
  })),
};

export const exploreSlice = createSlice({
  name: "explore",
  initialState: initialState.explores,
  reducers: {},
});

export const legalSlice = createSlice({
  name: "legal",
  initialState: initialState.legals,
  reducers: {},
});

const rootReducer = combineReducers({
  explore: exploreSlice.reducer,
  legal: legalSlice.reducer,
});

export default rootReducer;