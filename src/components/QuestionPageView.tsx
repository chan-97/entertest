import { FC } from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "components";

export const QuestionPageView: FC = () => {
  return (
    <>
      <StyledProgressContainer>
        <ProgressBar percentage={30} />
      </StyledProgressContainer>
      <StyledQuestionContainer>
        <StyledQuestionImg />
        <StyledQuestionNumber>Q1.</StyledQuestionNumber>
        <StyledQuestionTextContainer>
          <StyledQuestionText>
            나는 몇살 때부터 오디션을 보기 시작했나요?
          </StyledQuestionText>
        </StyledQuestionTextContainer>
        <StyledButtonsContainer>
          <Button text="16살 이하" onClick={() => console.log("")} />
          <Button text="17살 이상" onClick={() => console.log("")} />
        </StyledButtonsContainer>
      </StyledQuestionContainer>
    </>
  );
};

const StyledProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0 25px;
`;

const StyledQuestionContainer = styled.div`
  height: 100%;
`;

const StyledQuestionImg = styled.img`
  width: 100%;
  height: 245px;
  margin-bottom: 15px;
  border-radius: 15px;
`;

const StyledQuestionNumber = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const StyledQuestionTextContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0 10px;
`;

const StyledQuestionText = styled.p`
  padding: 15px;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 55%;
`;
