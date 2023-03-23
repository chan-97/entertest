import { FC } from "react";
import styled from "styled-components";

interface FooterProps {
  isAnimation?: boolean;
}

export const Footer: FC<FooterProps> = ({ isAnimation }) => {
  return (
    <StyledFooter isAnimation={isAnimation}>
      <p>ⓒ 2023. 오디션봇. All rights reserved.</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer<{ isAnimation?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  ${({ theme, isAnimation }) => isAnimation && theme.animations.slideUp.fifth};
`;
