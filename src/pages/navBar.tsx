import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaMoneyBillWave, FaUserCircle } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdEmail, MdLogout } from "react-icons/md";
import { IoChatbubbleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { RootState } from "../store";

const NavBar = () => {
  const { isOpenAside } = useSelector((store: RootState) => store.asideStore);

  const [isWidth, setIsWidth] = useState();
  const [isLogout, setIsLogout] = useState(false);
  const navWidthRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // GET WIDTH OF NAV WHEN THE SCREEN RESIZES
  //   const handleResize = () => {
  //     const width = navWidthRef.current.getBoundingClientRect().width;
  //     // console.log(width);
  //     setIsWidth(width);
  //   };

  // FUNCTION TO LOGOUT A USER
  const handleLogout = () => {
    // navigate("/admin");
  };

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
      className={`absolute right-0 ml-auto w-[calc(100%-50px)] bg-[#121212] iPhone:w-[calc(100%-70px)]`}
      ref={navWidthRef}
    >
      <ul
        className={`ml-auto w-fit flex items-center gap-4 px-4 py-4 iPhone:gap-6 surfaceDuo:gap-10 surfaceDuo:px-6`}
      ></ul>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.nav`
  /* width: calc(100% - 300px); */
  /* border: 2px solid red; */
`;
