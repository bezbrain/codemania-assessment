import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  handleClick?: () => void;
  btnContent?: string;
  btnStyle?: string;
  btnContainerStyle?: string;
  disabled?: boolean;
  icon?: string | ReactNode;
  refValue?: string;
}

const Button = ({
  handleClick,
  btnContent,
  btnStyle,
  btnContainerStyle,
  disabled,
  icon,
  refValue,
}: ButtonProps) => {
  return (
    <ButtonWrapper className={btnContainerStyle}>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`${btnStyle} ${disabled ? "dont__allow" : ""}`}
        ref={refValue}
      >
        {icon && <span>{icon}</span>}
        <span>{btnContent}</span>
      </button>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  /* border: 2px solid red; */
  text-align: center;
  display: flex;
  justify-content: center;

  > button {
    background-color: #8ac730;
    color: #fff;
    padding: 8px 1.5rem;
    /* border-radius: 8px; */
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3px;
  }
  > button:hover {
    transform: scale(1.01);
    transition: ease-in-out 0.3s all;
  }

  .dont__allow {
    cursor: not-allowed;
  }
`;
