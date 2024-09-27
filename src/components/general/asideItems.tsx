import { useState, useRef, useEffect, ReactNode } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

interface AsideItemsProps {
  path: string;
  name: string;
  icon: string;
  isOpenAside: boolean;
  handleAsideClick: () => void;
}

const AsideItems = ({
  path,
  name,
  icon,
  isOpenAside,
  handleAsideClick,
}: AsideItemsProps) => {
  const pageRef = useRef(null);
  const [getTopValue, setGetTopValue] = useState();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const heightChange = () => {
    // console.log(window.innerHeight);
    // setGetTopValue(window.innerHeight);
  };

  //   useEffect(() => {
  //     const topSpace = pageRef.current.getBoundingClientRect().top;
  //     // console.log(topSpace);
  //     setGetTopValue(topSpace);

  //     window.addEventListener("resize", heightChange);

  //     return () => window.removeEventListener("resize", heightChange);
  //   }, [getTopValue]);

  return (
    <button
      className={`cursor-pointer p-[8px] my-1 w-[200px] text-[#7E7F7F] hover:bg-[#3B3B3B] hover:text-[#fff] flex items-center gap-4 ${
        pathname === path ? "bg-[#3B3B3B] text-[#fff]" : ""
      }`}
      onClick={handleAsideClick}
      ref={pageRef}
    >
      <img src={icon} alt="icon" className="w-[20px]" />
      <span className={`${isOpenAside ? "" : "hidden"}`}>{name}</span>
    </button>
  );
};

export default AsideItems;
