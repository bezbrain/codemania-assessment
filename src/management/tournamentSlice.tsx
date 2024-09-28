import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTournamentPreview: false,
};

const tournamentSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    showTournamentPreview: (state) => {
      state.isTournamentPreview = true;
    },
    hideTournamentPreview: (state) => {
      state.isTournamentPreview = false;
    },
  },
});

export default tournamentSlice.reducer;

export const { showTournamentPreview, hideTournamentPreview } =
  tournamentSlice.actions;
