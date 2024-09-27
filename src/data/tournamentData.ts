import { FaPlay, FaUser } from "react-icons/fa6";
import { warZoneImg } from "../assets/images";

export const tournamentData = [
  {
    id: 1,
    image: warZoneImg,
  },
  {
    id: 2,
    title: "Continue playing",
    about: "Start or esume tournaments you have registered for",
    button: {
      btnContent: "Continue playing",
      icon: FaPlay,
    },
  },
  {
    id: 3,
    title: "Quick match",
    about: "Create a tournament and invite friends to play",
    button: {
      btnContent: "Let's go",
      icon: FaPlay,
    },
  },
];
