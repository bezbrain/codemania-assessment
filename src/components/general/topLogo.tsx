interface TopLogoProps {
  logo: string;
  smallLogo: string;
  logoStyle: string;
  smallLogoStyle: string;
}

const TopLogo = ({
  logo,
  smallLogo,
  logoStyle,
  smallLogoStyle,
}: TopLogoProps) => {
  return (
    <a href="/" className="flex gap-4 items-center">
      <img
        src={logo}
        alt="logo"
        className={`w-[100px] rounded-lg ${logoStyle}`}
      />
      <img
        src={smallLogo}
        alt="logo"
        className={`w-[30px] rounded-lg ${smallLogoStyle}`}
      />
    </a>
  );
};

export default TopLogo;
