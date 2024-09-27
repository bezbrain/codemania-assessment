import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound, SharedLayout, TournamentsPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Navigate to="/tournaments" />} />
          <Route path="/tournaments" element={<TournamentsPage />} />

          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
