import { useRef } from "react";
import { useLocation } from "react-router-dom";

interface AsideItemsProps {
  path: string;
  name: string;
  icon: string;
  id: number;
  handleAsideClick: () => void;
}

const AsideItems = ({
  path,
  name,
  icon,
  id,
  handleAsideClick,
}: AsideItemsProps) => {
  const pageRef = useRef(null);

  const { pathname } = useLocation();

  return (
    <button
      className={`cursor-pointer p-[8px] my-1 text-[#7E7F7F] hover:bg-[#3B3B3B] hover:text-[#fff] flex items-center gap-4 md:w-[200px] ${
        pathname === path ? "bg-[#3B3B3B] text-[#fff]" : ""
      } ${id === 7 ? "bg-[#5e0a07]" : ""}`}
      onClick={handleAsideClick}
      ref={pageRef}
    >
      <img src={icon} alt="icon" className="w-[20px]" />
      <span className="hidden md:block">{name}</span>
    </button>
  );
};

export default AsideItems;
