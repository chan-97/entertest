import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface ContentFrameProps {
  paddingLeftRignt?: string;
}

export const ContentFrame: FC<PropsWithChildren<ContentFrameProps>> = ({
  children,
  paddingLeftRignt
}) => {
  return (
    <StyledContainer>
      <StyledFrame paddingLeftRignt={paddingLeftRignt}>{children}</StyledFrame>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledFrame = styled.div<{
  paddingLeftRignt: ContentFrameProps["paddingLeftRignt"];
}>`
  width: 100%;
  max-width: 550px;
  ${({ paddingLeftRignt }) =>
    paddingLeftRignt &&
    `
    padding: 0 ${paddingLeftRignt};
  `}
`;
