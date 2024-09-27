import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedLayout, TournamentsPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TournamentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
