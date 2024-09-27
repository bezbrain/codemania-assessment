import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { sidebarItems } from "../data/sidebarItems";
// import { smallLogoImage } from "../../../assets/logo";
import { AsideItems, ToggleAside, TopLogo } from "../components/general";
import { AppDispatch, RootState } from "../store";
// import { TopLogo, ToggleAside, AsideDropdowns, AsideItems } from "./";

const SharedAside = () => {
  const { isOpenAside } = useSelector((store: RootState) => store.asideStore);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // FUNCTION TO TOGGLE THE SIDE BAR
  const handleToggleAside = () => {
    // dispatch(toggleSideBar());
  };

  const handleAsideClick = (path: string) => {
    // console.log(id);
    navigate(path);
  };

  useEffect(() => {
    //
  }, []);

  return (
    <SharedAsideWrapper
      className={`bg-[#121212] h-screen fixed overflow-y-auto text-white p-4 transition-all z-10 ${
        isOpenAside ? "w-[280px]" : "w-[50px] iPhone:w-[70px] overflow-x-hidden"
      }`}
    >
      {/* Top Logo */}
      <TopLogo />

      {/* Toggle Increase and decrease side bar */}
      <ToggleAside
        handleToggleAside={handleToggleAside}
        isOpenAside={isOpenAside}
      />

      <ul className="sm:mt-12">
        {sidebarItems.map((each) => {
          const { id, name, path, icon } = each;
          return (
            <div key={id} className="relative">
              {/* Main aside items */}
              <AsideItems
                name={name}
                path={path}
                // icon={icon}
                isOpenAside={isOpenAside}
                handleAsideClick={() => handleAsideClick(path)}
                icon={icon}
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
    background: #ff3399; /* Adjust this color to match your aside background */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffffff; /* Adjust this color for the scrollbar thumb */
    border-radius: 10px;
    border: 2px solid #ff3399; /* Optional: adds a border around the thumb */
  }

  /* Custom scrollbar for Firefox */
  scrollbar-width: thin;
  scrollbar-color: #ffffff #ff3399; /* thumb color and track color */

  /* Hide scrollbar but still enable scrolling */
  .custom-scrollbar {
    /*-ms-overflow-style: none; /* IE and Edge */
    /*scrollbar-width: none; /* Firefox */
  }

  .custom-scrollbar::-webkit-scrollbar {
    /*display: none; /* Safari and Chrome */
  }
`;
