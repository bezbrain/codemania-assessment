import { FaAngleDown, FaFilter } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";

const TornamentHeader = () => {
  return (
    <header className="flex justify-between items-center">
      <h2 className="my-4 font-[Title-Swiss] text-3xl text-white">
        Tournaments
      </h2>

      <div className="flex gap-8 items-center text-white">
        <button className="flex items-center gap-4">
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
