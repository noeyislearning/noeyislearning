import { createSlice, combineReducers } from "@reduxjs/toolkit";

/** Data */
import menuData from "@/assets/data/menu.json";

export interface ExploreState {
  explores: Explore[];
}

export interface ExploresMobileState {
  exploresMobile: ExploreMobile[];
}

export interface LegalState {
  legals: Legal[];
}

export interface ConnectState {
  connects: Connect[];
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

export interface Connect {
  id: number;
  name: string;
  url: string;
  isAllowed: boolean;
  status: string;
}

export interface ExploreMobile {
  id: number;
  name: string;
  url: string;
  isAllowed: boolean;
  icon: string;
  status: string;
}

const initialState: ExploreState & LegalState & ConnectState & ExploresMobileState = {
  explores: menuData.menu.explore.map((explore) => ({
    ...explore,
  })),
  legals: menuData.menu.legal.map((legal) => ({
    ...legal,
  })),
  connects: menuData.menu.connect.map((connect) => ({
    ...connect,
  })),
  exploresMobile: menuData.menu.exploreMobile.map((exploreMobile) => ({
    ...exploreMobile,
  })),
};

/** Slices */
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

export const connectSlice = createSlice({
  name: "connect",
  initialState: initialState.connects,
  reducers: {},
});

export const exploresMobileSlice = createSlice({
  name: "exploresMobile",
  initialState: initialState.exploresMobile,
  reducers: {},
});

/** Reducer */
const rootReducer = combineReducers({
  explore: exploreSlice.reducer,
  legal: legalSlice.reducer,
  connect: connectSlice.reducer,
  exploresMobile: exploresMobileSlice.reducer,
});

export default rootReducer;