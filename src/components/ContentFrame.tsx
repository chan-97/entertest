import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface ContentFrameProps {
  paddingLeftRignt?: string;
  resultPageStyle?: boolean;
}

export const ContentFrame: FC<PropsWithChildren<ContentFrameProps>> = ({
  children,
  paddingLeftRignt,
  resultPageStyle
}) => {
  return (
    <StyledContainer resultPageStyle={resultPageStyle}>
      <StyledFrame
        paddingLeftRignt={paddingLeftRignt}
        resultPageStyle={resultPageStyle}
      >
        {children}
      </StyledFrame>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{
  resultPageStyle: ContentFrameProps["resultPageStyle"];
}>`
  display: flex;
  justify-content: center;
  width: 100%;
  ${({ theme, resultPageStyle }) =>
    resultPageStyle && theme.animations.slideUp.first};
`;

const StyledFrame = styled.div<{
  paddingLeftRignt: ContentFrameProps["paddingLeftRignt"];
  resultPageStyle: ContentFrameProps["resultPageStyle"];
}>`
  width: 100%;
  max-width: 550px;
  ${({ paddingLeftRignt }) =>
    paddingLeftRignt &&
    `
    padding: 0 ${paddingLeftRignt};
  `};
  ${({ resultPageStyle }) =>
    resultPageStyle &&
    `
    box-shadow: 0 0px 10px 1px rgb(0 0 0 / 20%);
  `};
`;
