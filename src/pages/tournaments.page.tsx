import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TournamentComp } from "../components/routes/tournamentsComp";
import { AppDispatch, RootState } from "../store";
import { getTournamentWidth } from "../management/asideSlice";

const TournamentsPage = () => {
  const { tournamentWidth } = useSelector(
    (store: RootState) => store.asideStore
  );

  const tournamentRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dispatch = useDispatch<AppDispatch>();

  const onResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // console.log("Checking window");

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    // console.log("Checking tournament");

    if (tournamentRef.current) {
      const componentLayoutSizes =
        tournamentRef?.current?.getBoundingClientRect().width;

      // console.log(componentLayoutSizes);
      dispatch(getTournamentWidth(componentLayoutSizes));
    }
  }, [tournamentWidth, windowWidth]);

  return (
    <div ref={tournamentRef}>
      <TournamentComp />
    </div>
  );
};

export default TournamentsPage;
