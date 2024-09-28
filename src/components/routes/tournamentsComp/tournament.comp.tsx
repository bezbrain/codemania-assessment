import { FaUser, FaPlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../store";
import { Button } from "../../general";
import { GameSetupCard, TornamentHeader, WarZoneCard } from "./";
import { showTournamentPreview } from "../../../management/tournamentSlice";

const TournamentComp = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <GameSetupCard
        title="Setup your profile"
        about="Complete your information to get access to tournaments and other
            premium features"
        aboutStyle="text-[12px] text-[#959494] surfaceDuo:text-[16px]"
        button={
          <Button
            btnContent="Complete profile"
            icon={<FaUser />}
            btnStyle="text-black items-center gap-2 font-semibold px-4"
            btnContainerStyle="w-fit mt-3"
          />
        }
      />

      <div className="gap-4 largeTab:flex">
        <GameSetupCard
          title="Continue playing"
          about="Start or esume tournaments you have registered for"
          aboutStyle="text-[12px] text-[#959494] surfaceDuo:text-[16px] largeTab:max-w-[250px]"
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
          aboutStyle="text-[12px] text-[#959494] surfaceDuo:text-[16px] largeTab:max-w-[250px]"
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

        <div className="grid surfaceDuo:grid-cols-2 md:grid-cols-1 iPadAir:grid-cols-2 lgScreen:grid-cols-3 gap-2 largeTab:gap-12">
          {Array(6)
            .fill(0)
            .map((_, index) => {
              return (
                <WarZoneCard
                  key={index}
                  handlePreviewClick={() => dispatch(showTournamentPreview())}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TournamentComp;
