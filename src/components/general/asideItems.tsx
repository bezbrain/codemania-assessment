import { useState, useRef, useEffect, ReactNode } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

interface AsideItemsProps {
  path: string;
  name: string;
  icon: ReactNode;
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
    <a
      href={path}
      className={`cursor-pointer p-[8px] my-1 hover:bg-white hover:text-[#ff3399] flex items-center gap-4 ${
        pathname === path
          ? "bg-white text-[#ff3399] border-t-[1px] border-b-[1px]"
          : ""
      }`}
      onClick={handleAsideClick}
      ref={pageRef}
    >
      <span
        className={`${isOpenAside ? "" : "mx-auto text-xl iPhone:text-2xl"}`}
      >
        {icon}
      </span>
      <span className={`${isOpenAside ? "" : "hidden"}`}>{name}</span>
    </a>
  );
};

export default AsideItems;
