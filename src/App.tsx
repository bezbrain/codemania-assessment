import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  CommunityPage,
  ContentLockerPage,
  LeaderboardPage,
  LiveBettigPage,
  NotFound,
  SharedLayout,
  TokenShopPage,
  TournamentsPage,
  WarZoneOverviewPage,
} from "./pages";
import { RootState } from "./store";

const App = () => {
  const { isTournamentPreview } = useSelector(
    (store: RootState) => store.tournamentStore
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Navigate to="/tournaments" />} />
          <Route
            path="/tournaments"
            element={
              isTournamentPreview ? (
                <WarZoneOverviewPage />
              ) : (
                <TournamentsPage />
              )
            }
          />

          <Route path="/leaderboards" element={<LeaderboardPage />} />
          <Route path="/token-shop" element={<TokenShopPage />} />
          <Route path="/live-betting" element={<LiveBettigPage />} />
          <Route path="/content-locker" element={<ContentLockerPage />} />
          <Route path="/community" element={<CommunityPage />} />

          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
