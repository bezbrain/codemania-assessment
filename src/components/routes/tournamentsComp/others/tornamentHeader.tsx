import { FaAngleDown, FaFilter } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";

const TornamentHeader = () => {
  return (
    <header className="sm:flex justify-between items-center mb-3 sm:mb-0">
      <h2 className="my-4 font-[Title-Swiss] text-xl surfaceDuo:text-3xl text-white">
        Tournaments
      </h2>

      <div className="flex gap-6 items-center text-white text-[12px] sm:text-[16px] surfaceDuo:gap-8">
        <button className="flex items-center gap-2 surfaceDuo:gap-4">
          <TbArrowsSort />
          <span>Sort by</span>
          <FaAngleDown />
        </button>

        <button className="flex items-center gap-4">
          <FaFilter />
          <span>Filter</span>
          <FaAngleDown />
        </button>
      </div>
    </header>
  );
};

export default TornamentHeader;
