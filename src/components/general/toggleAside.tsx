import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

interface ToggleAsideProps {
  handleToggleAside: () => void;
  isOpenAside: boolean;
}

const ToggleAside = ({ handleToggleAside, isOpenAside }: ToggleAsideProps) => {
  return (
    <div
      className="bg-[#000] m-3 w-fit rounded-full cursor-pointer iPhone:m-4"
      onClick={handleToggleAside}
    >
      {isOpenAside && <FaAngleRight className="p-2 text-[##000] text-3xl" />}
      {!isOpenAside && (
        <FaAngleLeft className="p-2 text-[##000] text-2xl iPhone:text-3xl" />
      )}
    </div>
  );
};

export default ToggleAside;
