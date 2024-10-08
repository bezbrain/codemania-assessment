import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { FaCoins, FaAngleDown } from "react-icons/fa6";
import { RiNotification2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

import { RootState } from "../store";

const NavBar = () => {
  const { asideWidth, tournamentWidth } = useSelector(
    (store: RootState) => store.asideStore
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isRemaining, setIsRemaining] = useState(0);
  const navWidthRef = useRef(null);

  // GET WIDTH OF NAV WHEN THE SCREEN RESIZES
  //   const handleResize = () => {
  //     const width = navWidthRef.current.getBoundingClientRect().width;
  //     // console.log(width);
  //     setIsWidth(width);
  //   };

  // FUNCTION TO LOGOUT A USER

  const onResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const occupiedWidth = asideWidth + tournamentWidth;
    const remainingWidth = window.innerWidth - occupiedWidth;

    setIsRemaining(remainingWidth);
  }, [asideWidth, tournamentWidth, windowWidth]);

  useEffect(() => {
    // console.log("Checking window");

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [windowWidth]);

  // SET WIDTH OF NAV WHEN THE SCREEN LOADS, OR CHANGES BASED ON THE DEPENDENCY ARRAY
  //   useEffect(() => {
  //     // Initial width set
  //     const width = navWidthRef.current.getBoundingClientRect().width;
  //     setIsWidth(width);

  //     // Add event listener
  //     window.addEventListener("resize", handleResize);

  //     // Clean up event listener
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, [isOpenAside]);

  // USE THIS TO CHECK IF WIDTH IS 1025, THEN THE SIZE BAR SHOULD BE REDUCED
  //   useEffect(() => {
  //     if (isWidth < 1025) {
  //       dispatch(hideSideBar());
  //     }
  //   }, [isWidth]);

  return (
    <NavBarWrapper
      className={`fixed p-4 border-b-[1px] border-slate-700 bg-[#121212]`}
      style={{
        right: isRemaining / 2,
        width: `${tournamentWidth + 10}px`,
      }}
      ref={navWidthRef}
    >
      <ul className={`flex justify-between items-center`}>
        <div className="relative">
          <IoSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-2xl cursor-pointer" />
          <input
            type="text"
            placeholder="Search tournament, player name or player tag"
            className="h-[40px] rounded-md pl-12 pr-4 text-[#7E7F7F] bg-[#262626] opacity-100 hidden iPad:block iPad:w-[300px] xl:w-[500px]"
          />
        </div>

        <div className="flex gap-6 surfaceDuo:gap-8 items-center">
          <RiNotification2Fill className="text-[#E5E4E4] rotate-45 cursor-pointer text-sm surfaceDuo:text-xl" />

          <div className="surfaceDuo:flex items-center gap-[6px] text-sm surfaceDuo:text-[16px]">
            <FaCoins className="text-[#FFB800]" />
            <p className="text-[#E5E4E4] hidden surfaceDuo:block">20,0000</p>
          </div>

          <FaUser className="text-[#E5E4E4] cursor-pointer" />

          <div>
            <p className="text-[#E5E4E4] text-sm hidden surfaceDuo:block">
              Akinola Olalekan
            </p>
            <p className="text-[#E5E4E4] text-center text-sm block surfaceDuo:hidden">
              AO
            </p>
            <button className="bg-[#40610F] text-[#E5E4E4] text-[12px] flex items-center gap-1 rounded-sm px-2">
              <span>Online</span>
              <FaAngleDown />
            </button>
          </div>
        </div>
      </ul>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.nav`
  /* width: calc(100% - 300px); */
  /* border: 2px solid red; */
`;
