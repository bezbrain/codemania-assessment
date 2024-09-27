import { FaUser, FaPlay } from "react-icons/fa6";

import { Button } from "../../general";
import { GameSetupCard, TornamentHeader, WarZoneCard } from "./";

const TournamentComp = () => {
  return (
    <div>
      <GameSetupCard
        title="Setup your profile"
        about="Complete your information to get access to tournaments and other
            premium features"
        button={
          <Button
            btnContent="Complete profile"
            icon={<FaUser />}
            btnStyle="text-black items-center gap-2 font-semibold px-4"
            btnContainerStyle="w-fit mt-3"
          />
        }
      />

      <div className="flex gap-4">
        <GameSetupCard
          title="Continue playing"
          about="Start or esume tournaments you have registered for"
          aboutStyle="max-w-[250px]"
          button={
            <Button
              btnContent="Continue playing"
              icon={<FaPlay />}
              btnStyle="items-center gap-2 font-semibold px-4 bg-inherit text-white"
              btnContainerStyle="w-fit mt-3"
            />
          }
        />
        <GameSetupCard
          title="Quick match"
          about="Create a tournament and invite friends to play"
          aboutStyle="max-w-[250px]"
          button={
            <Button
              btnContent="Let's go"
              icon={<FaPlay />}
              btnStyle="items-center gap-2 font-semibold px-4 bg-inherit text-white"
              btnContainerStyle="w-fit mt-3"
            />
          }
        />
      </div>

      {/* Tornaments */}
      <div className="">
        <TornamentHeader />

        <div className="grid grid-cols-3 gap-12">
          {Array(6)
            .fill(0)
            .map((_, index) => {
              return <WarZoneCard key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default TournamentComp;
