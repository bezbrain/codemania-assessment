import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../store";
import { NavBar, SharedAside } from "./";

const SharedLayout = () => {
  const { isOpenAside } = useSelector((store: RootState) => store.asideStore);

  const handleCloseSideBar = () => {
    // dispatch(closeSideBarDropdown());
  };

  return (
    <main className="bg-[#000]">
      <section className="relative max-w-[1400px] mx-auto">
        <SharedAside />
        <NavBar />

        <SharedLayoutWrapper
          className={`ml-auto bg-[#f7f9fc] min-h-[100vh] ${
            isOpenAside
              ? "lg:w-[calc(100%-280px)]"
              : "w-[calc(100%-50px)] iPhone:w-[calc(100%-70px)]"
          }`}
          onClick={handleCloseSideBar}
        >
          <Outlet />
        </SharedLayoutWrapper>
      </section>
    </main>
  );
};

export default SharedLayout;

const SharedLayoutWrapper = styled.section`
  /* border: 2px solid red; */
  padding: 1.5rem;

  @media screen and (max-width: 539px) {
    padding-inline: 1rem;
  }
`;
