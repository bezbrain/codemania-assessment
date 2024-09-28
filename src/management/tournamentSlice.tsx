import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTournamentPreview: false,
  isLeaderboard: true,
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
    showLeaderboard: (state) => {
      state.isLeaderboard = true;
    },
    showFixtures: (state) => {
      state.isLeaderboard = false;
    },
  },
});

export default tournamentSlice.reducer;

export const {
  showTournamentPreview,
  hideTournamentPreview,
  showFixtures,
  showLeaderboard,
} = tournamentSlice.actions;
