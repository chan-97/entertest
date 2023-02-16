import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export const ContentFrame: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledContainer>
      <StyledFrame>{children}</StyledFrame>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledFrame = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 0 20px;
`;
