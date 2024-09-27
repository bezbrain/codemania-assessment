import { ReactNode } from "react";
import styled from "styled-components";

import { gameImage } from "../../../../assets/images";

interface GameSetupCardProps {
  title: string;
  about: string;
  aboutStyle?: string;
  button: ReactNode;
}

const GameSetupCard = ({
  title,
  about,
  button,
  aboutStyle,
}: GameSetupCardProps) => {
  return (
    <GameSetupCardWrapper>
      <div className="flex items-end justify-between">
        <div>
          <h2>{title}</h2>
          <p className={aboutStyle}>{about}</p>
          {button}
        </div>

        <div className="">
          <img src={gameImage} alt="Game" className="h-full" />
        </div>
      </div>
    </GameSetupCardWrapper>
  );
};

export default GameSetupCard;

const GameSetupCardWrapper = styled.div`
  background-color: #1c1c1c;
  padding: 1rem;
  margin-top: 1rem;
  color: #fff;
  width: 100%;
  border-radius: 4px;

  h2 {
    /* border: 2px solid red; */
    font-family: "Title-Swiss";
    font-size: 2rem;
  }
`;
