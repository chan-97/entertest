import { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick: () => void;
  width?: string;
}

export const Button: FC<ButtonProps> = ({ text, onClick, width }) => {
  return (
    <StyledButton width={width} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ width: ButtonProps["width"] }>`
  width: ${({ width }) => width ?? "100%"};
  height: auto;
  min-height: 54px;
  padding: 3px 6px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 15%) 0px 5px 20px;
  transition: transform 0.2s ease-in-out 0s;

  &:hover {
    transform: translateY(-4px);
  }

  &:focus {
    outline: none;
  }
`;
