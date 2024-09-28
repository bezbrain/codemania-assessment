import { useEffect, useRef, useState } from "react";
import { IoChevronBack } from "react-icons/io5";

import { Button } from "../../general";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { hideTournamentPreview } from "../../../management/tournamentSlice";
import { previewImg } from "../../../assets/images";
import { calendarIcon, goldCupIcon } from "../../../assets/icons";
import { IoLogoGameControllerB } from "react-icons/io";
import { getTournamentWidth } from "../../../management/asideSlice";
import { TournamentInfo } from "./";

const GamePreviewComp = () => {
  const dispatch = useDispatch<AppDispatch>();

  const tournamentPreviewRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    if (tournamentPreviewRef.current) {
      const componentLayoutSizes =
        tournamentPreviewRef?.current?.getBoundingClientRect().width;

      // console.log(componentLayoutSizes);
      dispatch(getTournamentWidth(componentLayoutSizes));
    }
  }, [windowWidth]);

  return (
    <div
      className="font-[Regular-Swiss] text-[#959494]"
      ref={tournamentPreviewRef}
    >
      <Button
        icon={<IoChevronBack />}
        btnContent="Back"
        btnContainerStyle="w-fit"
        btnStyle="bg-inherit items-center hover:scale-[1.05] px-0"
        handleClick={() => dispatch(hideTournamentPreview())}
      />

      {/* Warzone image */}
      <div>
        <img src={previewImg} loading="lazy" alt="Warzone" className="w-full" />
      </div>

      <h3 className="text-2xl text-white font-[Title-Swiss] font-semibold my-5">
        Call of duty
      </h3>

      <div className="flex items-center w-fit rounded-xl px-2 py-1 gap-2 my-3 bg-[#242424] text-[#888888]">
        <img src={goldCupIcon} alt="Gold" loading="lazy" className="w-7" />
        <p>₦10,000</p>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>

      <div className="grid grid-cols-2 gap-4 sm:flex items-center sm:gap-12 my-3">
        <div className="flex items-center gap-1">
          <img
            src={calendarIcon}
            alt="Calendar"
            loading="lazy"
            className="w-[25px]"
          />
          <p>10 Feb 2023</p>
        </div>
        <div className="flex items-center gap-1">
          <img
            src={calendarIcon}
            alt="Calendar"
            loading="lazy"
            className="w-[25px]"
          />
          <p>Free-to-play</p>
        </div>
        <div className="flex items-center gap-1">
          <img
            src={calendarIcon}
            alt="Calendar"
            loading="lazy"
            className="w-[25px]"
          />
          <p>4v4</p>
        </div>
        <div className="flex items-center gap-1">
          <img
            src={calendarIcon}
            alt="Calendar"
            loading="lazy"
            className="w-[25px]"
          />
          <p>10/48</p>
        </div>
      </div>

      <Button
        btnContent="Join tournament"
        icon={<IoLogoGameControllerB />}
        btnStyle="items-center gap-2 text-black font-semibold"
        btnContainerStyle="my-2 w-fit"
        // handleClick={handlePreviewClick}
      />

      {/* Tournament Information Table */}
      <h2 className="text-2xl text-white font-[Title-Swiss] font-semibold my-5">
        Tournament information
      </h2>

      <TournamentInfo />
    </div>
  );
};

export default GamePreviewComp;
