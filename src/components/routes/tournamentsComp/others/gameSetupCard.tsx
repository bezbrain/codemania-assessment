import { gameImage } from "../../../../assets/images";
import styled from "styled-components";
import { ReactNode } from "react";

interface GameSetupCardProps {
  title: string;
  about: string;
  button: ReactNode;
}

const GameSetupCard = ({ title, about, button }: GameSetupCardProps) => {
  return (
    <GameSetupCardWrapper>
      <div className="flex items-end justify-between">
        <div>
          <h2>{title}</h2>
          <p>{about}</p>
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
  margin-block: 1rem;
  color: #fff;

  h2 {
    /* border: 2px solid red; */
    font-family: "Title-Swiss";
    font-size: 2rem;
  }
`;
