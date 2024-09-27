import { createSlice } from "@reduxjs/toolkit";

interface AsideProps {
  isOpenAside: boolean;
}

const initialState: AsideProps = {
  isOpenAside: true,
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
  },
});

export default asideSlice.reducer;

export const { toggleSideBar, hideSideBar } = asideSlice.actions;
