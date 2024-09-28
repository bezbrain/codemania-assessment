import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../../general";
import { LeaderboardTable, TournamentFixtures } from "../";
import { AppDispatch, RootState } from "../../../../store";
import {
  showFixtures,
  showLeaderboard,
} from "../../../../management/tournamentSlice";

const TournamentInfo = () => {
  const { isLeaderboard } = useSelector(
    (store: RootState) => store.tournamentStore
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <header className="flex items-center gap-4 mb-6">
        <Button
          btnContent="Leaderboard"
          btnStyle={`bg-[inherit] px-3 ${isLeaderboard ? "bg-[#3b3b3b]" : ""}`}
          btnContainerStyle="w-fit"
          handleClick={() => dispatch(showLeaderboard())}
        />
        <Button
          btnContent="Fixtures"
          btnStyle={`bg-[inherit] px-3 ${!isLeaderboard ? "bg-[#3b3b3b]" : ""}`}
          btnContainerStyle="w-fit"
          handleClick={() => dispatch(showFixtures())}
        />
      </header>

      <section className="mb-8">
        {/* Leaderboard table tab */}
        {isLeaderboard && <LeaderboardTable />}

        {/* Fixtures tab */}
        {!isLeaderboard && <TournamentFixtures />}
      </section>
    </div>
  );
};

export default TournamentInfo;
