import { FC } from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "components";
import {
  UseContentQuestionState,
  UseContentQuestionUpdate
} from "hooks/useContentQuestion";

interface QuestionPageViewProps {
  currentQuestion: UseContentQuestionState["currentQuestion"];
  onClickAnswer: UseContentQuestionUpdate["onClickAnswer"];
}

export const QuestionPageView: FC<QuestionPageViewProps> = ({
  currentQuestion,
  onClickAnswer
}) => {
  return (
    <>
      <StyledProgressContainer>
        <ProgressBar percentage={30} />
      </StyledProgressContainer>
      {currentQuestion && (
        <StyledQuestionContainer>
          <StyledQuestionImg src={currentQuestion.imgSrc} />
          <StyledQuestionNumber>
            {`Q${currentQuestion.questionNumber}.`}
          </StyledQuestionNumber>
          <StyledQuestionTextContainer>
            <StyledQuestionText>
              {currentQuestion.questionText}
            </StyledQuestionText>
          </StyledQuestionTextContainer>
          <StyledButtonsContainer>
            {currentQuestion.answers.map((answer, i) => {
              return (
                <Button
                  key={i}
                  text={answer.text}
                  onClick={() =>
                    onClickAnswer(
                      currentQuestion.questionNumber,
                      answer.alphabet
                    )
                  }
                />
              );
            })}
          </StyledButtonsContainer>
        </StyledQuestionContainer>
      )}
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