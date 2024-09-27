import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { sidebarItems } from "../data/sidebarItems";
// import { smallLogoImage } from "../../../assets/logo";
import { AsideItems, ToggleAside, TopLogo } from "../components/general";
import { AppDispatch, RootState } from "../store";
import { logo, smallLogo } from "../assets";
import { getAsideWidth } from "../management/asideSlice";
// import { TopLogo, ToggleAside, AsideDropdowns, AsideItems } from "./";

const SharedAside = () => {
  const { isOpenAside, asideWidth } = useSelector(
    (store: RootState) => store.asideStore
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const asideRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // FUNCTION TO TOGGLE THE SIDE BAR
  const handleToggleAside = () => {
    // dispatch(toggleSideBar());
  };

  const handleAsideClick = (path: string) => {
    // console.log(id);
    navigate(path);
  };

  useEffect(() => {
    console.log("Checking aside");

    if (asideRef.current) {
      const asideWidth = asideRef.current.getBoundingClientRect().width;
      console.log(asideWidth);
      dispatch(getAsideWidth(asideWidth));
    }
  }, [asideWidth, windowWidth]);

  useEffect(() => {
    console.log("Checking window");

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [windowWidth]);

  return (
    <SharedAsideWrapper
      className={`bg-[#121212] h-screen fixed overflow-y-auto text-white p-4 transition-all z-10 md:w-[280px]`}
      ref={asideRef}
    >
      {/* Top Logo */}
      <TopLogo
        logo={logo}
        smallLogo={smallLogo}
        logoStyle="hidden md:block"
        smallLogoStyle="block md:hidden"
      />

      {/* Toggle Increase and decrease side bar */}
      <ToggleAside
        handleToggleAside={handleToggleAside}
        isOpenAside={isOpenAside}
      />

      <ul className="mt-6 space-y-4 md:space-y-0 md:mt-10 min-h-[80%] relative">
        {sidebarItems.map((each) => {
          const { id, name, path, icon } = each;
          return (
            <div
              key={id}
              className={`${id === 7 ? "absolute bottom-0" : "relative"}`}
            >
              {/* Main aside items */}
              <AsideItems
                name={name}
                path={path}
                isOpenAside={isOpenAside}
                handleAsideClick={() => handleAsideClick(path)}
                icon={icon}
                id={id}
              />
            </div>
          );
        })}
      </ul>
    </SharedAsideWrapper>
  );
};

export default SharedAside;

const SharedAsideWrapper = styled.aside`
  /* border: 2px solid red; */
  /* Custom scrollbar for WebKit browsers */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #121212; /* Adjust this color to match your aside background */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffffff; /* Adjust this color for the scrollbar thumb */
    border-radius: 10px;
    border: 2px solid #121212; /* Optional: adds a border around the thumb */
  }

  /* Custom scrollbar for Firefox */
  scrollbar-width: thin;
  scrollbar-color: #ffffff #121212; /* thumb color and track color */

  .custom-scrollbar::-webkit-scrollbar {
    /*display: none; /* Safari and Chrome */
  }
`;
