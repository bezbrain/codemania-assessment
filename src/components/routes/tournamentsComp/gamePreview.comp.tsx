import { IoChevronBack } from "react-icons/io5";

import { Button } from "../../general";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { hideTournamentPreview } from "../../../management/tournamentSlice";
import { previewImg } from "../../../assets/images";

const GamePreviewComp = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <Button
        icon={<IoChevronBack />}
        btnContent="Back"
        btnContainerStyle="w-fit"
        btnStyle="bg-inherit items-center hover:scale-[1.05] px-0"
        handleClick={() => dispatch(hideTournamentPreview())}
      />

      <img src={previewImg} loading="lazy" alt="Warzone" />
    </div>
  );
};

export default GamePreviewComp;
