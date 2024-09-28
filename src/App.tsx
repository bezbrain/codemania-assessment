import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  NotFound,
  SharedLayout,
  TournamentsPage,
  WarZoneOverviewPage,
} from "./pages";
import { useSelector } from "react-redux";
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

          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
