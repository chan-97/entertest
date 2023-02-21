import { FC, useMemo } from "react";
import styled from "styled-components";
import { UseContentQuestionState } from "hooks/useContentQuestion";

interface ProgressBarProps {
  currentQuestionIndex: UseContentQuestionState["currentQuestionIndex"];
  totalProgressStep: UseContentQuestionState["totalProgressStep"];
}

export const ProgressBar: FC<ProgressBarProps> = ({
  currentQuestionIndex,
  totalProgressStep
}) => {
  const progressPercentage = useMemo(() => {
    if (currentQuestionIndex !== -1) {
      return (100 / totalProgressStep) * currentQuestionIndex;
    }

    return 100;
  }, [currentQuestionIndex, totalProgressStep]);

  return (
    <StyledProgressBox>
      <StyledProgressStep end={currentQuestionIndex === -1}>
        {`${currentQuestionIndex + 1}/${totalProgressStep}`}
      </StyledProgressStep>
      <StyledProgressBar>
        <StyledFiller percentage={progressPercentage} />
      </StyledProgressBar>
    </StyledProgressBox>
  );
};

const StyledProgressBox = styled.div`
  width: 85%;
`;

const StyledProgressStep = styled.div<{ end: boolean }>`
  display: flex;
  justify-content: flex-end;
  margin: 0 3px 3px 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
  ${({ end }) =>
    end &&
    `
    visibility: hidden;
  `}
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
