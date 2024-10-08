import { IoLogoGameControllerB } from "react-icons/io";
import { GiTrophyCup } from "react-icons/gi";

import { calendarIcon } from "../../../../assets/icons";
import { warZoneImg } from "../../../../assets/images";
import { Button } from "../../../general";

interface WarZoneCardProps {
  handlePreviewClick: () => void;
}

const WarZoneCard = ({ handlePreviewClick }: WarZoneCardProps) => {
  return (
    <div
      className="w-full cursor-pointer p-2 hover:border-2 hover:border-[#959494] transition-all"
      onClick={handlePreviewClick}
    >
      <div>
        <img src={warZoneImg} alt="Warzone" loading="lazy" className="w-full" />
      </div>

      <h3 className="text-white text-xl my-2 px-2">Call of duty</h3>

      <div className="grid grid-cols-2 text-[13px] px-1">
        <div className="flex items-center gap-[1px]">
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

      <div className="flex gap-2 m-3">
        <GiTrophyCup className="text-2xl text-white" />
        <p>₦10,000</p>
      </div>

      <Button
        btnContent="Join tournament"
        icon={<IoLogoGameControllerB />}
        btnStyle="items-center gap-2 text-black font-semibold"
        btnContainerStyle="my-2"
        handleClick={handlePreviewClick}
      />
      <Button
        btnContent="View details"
        icon={<IoLogoGameControllerB />}
        btnStyle="bg-inherit items-center"
        btnContainerStyle="border-[1px] border-slate-700"
        handleClick={handlePreviewClick}
      />
    </div>
  );
};

export default WarZoneCard;
