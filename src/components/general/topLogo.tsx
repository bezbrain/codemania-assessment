import { logo } from "../../assets";

interface TopLogoProps {
  //   smallLogoImage;
  //   isOpenAside: boolean;
}

const TopLogo = () => {
  return (
    <a href="/" className="flex gap-4 items-center px-3">
      <img src={logo} alt="logo" className="w-[100px] rounded-lg" />
    </a>
  );
};

export default TopLogo;
