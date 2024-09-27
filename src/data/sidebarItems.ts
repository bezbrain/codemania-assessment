import {
  communityIcon,
  contentLockerIcon,
  leaderBoardIcon,
  liveBettingIcon,
  logoutIcon,
  tokenShoppingIcon,
  tournamentIcon,
} from "../assets/icons";

export const sidebarItems = [
  {
    id: 1,
    name: "Tournaments",
    path: "/tournaments",
    icon: tournamentIcon,
  },
  {
    id: 2,
    name: "Leaderboards",
    path: "/leaderboards",
    icon: leaderBoardIcon,
  },
  {
    id: 3,
    name: "Token shop",
    path: "/token-shop",
    icon: tokenShoppingIcon,
  },
  {
    id: 4,
    name: "Live betting",
    path: "/live-betting",
    icon: liveBettingIcon,
  },
  {
    id: 5,
    name: "Content locker",
    path: "/content-locker",
    icon: contentLockerIcon,
  },
  {
    id: 6,
    name: "Community",
    path: "/community",
    icon: communityIcon,
  },
  {
    id: 7,
    name: "LOG - OUT",
    path: "",
    icon: logoutIcon,
  },
];
