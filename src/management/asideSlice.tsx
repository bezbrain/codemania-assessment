import { createSlice } from "@reduxjs/toolkit";

interface AsideProps {
  isOpenAside: boolean;
  asideWidth: number;
  tournamentWidth: number;
}

const initialState: AsideProps = {
  isOpenAside: true,
  asideWidth: 0,
  tournamentWidth: 0,
};

const asideSlice = createSlice({
  name: "aside",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isOpenAside = !state.isOpenAside;
    },
    hideSideBar: (state) => {
      state.isOpenAside = false;
    },
    getAsideWidth: (state, { payload }) => {
      state.asideWidth = payload;
    },
    getTournamentWidth: (state, { payload }) => {
      state.tournamentWidth = payload;
    },
  },
});

export default asideSlice.reducer;

export const { toggleSideBar, hideSideBar, getAsideWidth, getTournamentWidth } =
  asideSlice.actions;
