import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

interface ToggleAsideProps {
  handleToggleAside: () => void;
  isOpenAside: boolean;
}

const ToggleAside = ({ handleToggleAside, isOpenAside }: ToggleAsideProps) => {
  return (
    <div
      className="bg-[#353535] mt-8 w-fit rounded-full block cursor-pointer md:hidden"
      onClick={handleToggleAside}
    >
      {isOpenAside && (
        <FaAngleRight className="p-1 md:p-2 text-[##000] text-2xl md:text-3xl" />
      )}
      {!isOpenAside && (
        <FaAngleLeft className="p-1 text-[##000] text-2xl md:p-2 md:text-3xl" />
      )}
    </div>
  );
};

export default ToggleAside;
