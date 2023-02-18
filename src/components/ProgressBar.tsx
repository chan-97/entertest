import { FC } from "react";
import styled from "styled-components";

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <StyledProgressBox>
      <StyledProgressStep>1/12</StyledProgressStep>
      <StyledProgressBar>
        <StyledFiller percentage={percentage} />
      </StyledProgressBar>
    </StyledProgressBox>
  );
};

const StyledProgressBox = styled.div`
  width: 85%;
`;

const StyledProgressStep = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 3px 3px 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
`;

const StyledProgressBar = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.07);
`;

const StyledFiller = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  border-radius: inherit;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: width 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
