import { FC, useState, useEffect, AnimationEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { ProgressBar, Button } from "components";
import {
  UseContentQuestionState,
  UseContentQuestionUpdate
} from "hooks/useContentQuestion";
import {
  UseDisappearAnimationState,
  UseDisappearAnimationUpdate
} from "hooks/useDisappearAnimation";

interface QuestionPageViewProps
  extends UseContentQuestionState,
    UseContentQuestionUpdate,
    UseDisappearAnimationState,
    UseDisappearAnimationUpdate {}

export const QuestionPageView: FC<QuestionPageViewProps> = ({
  currentQuestionIndex,
  totalProgressStep,
  currentQuestion,
  setContentQuestion,
  isDisappearAnimation,
  onDisappearAnimation,
  offDisappearAnimation
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [totalA, setTotalA] = useState<number>(0);
  const navigate = useNavigate();
  const theme = useTheme();

  const onClickAnswer = (answerAlphabet: string) => {
    if (!isButtonClicked) {
      if (answerAlphabet === "A") setTotalA((currentState) => currentState + 1);
      onDisappearAnimation();
      setIsButtonClicked(true);
    }
  };

  const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (
      theme.animations.slideOutToLeft.animationName === e.animationName &&
      currentQuestion
    ) {
      setContentQuestion((currentState) => {
        return currentState.map((question) => {
          return {
            ...question,
            active:
              question.questionNumber === currentQuestion.questionNumber + 1
          };
        });
      });

      offDisappearAnimation();
    }
  };

  useEffect(() => {
    setIsButtonClicked(false);
    if (!currentQuestion) setTimeout(() => navigate(`result/${totalA}`), 1000);
  }, [currentQuestion]);

  return (
    <>
      <StyledProgressContainer>
        <ProgressBar
          currentQuestionIndex={currentQuestionIndex}
          totalProgressStep={totalProgressStep}
        />
      </StyledProgressContainer>
      {currentQuestion && (
        <StyledQuestionContainer>
          <StyledQuestionImg
            src={currentQuestion.imgSrc}
            isDisappearAnimation={isDisappearAnimation}
          />
          <StyledQuestionNumber isDisappearAnimation={isDisappearAnimation}>
            {`Q${currentQuestion.questionNumber}.`}
          </StyledQuestionNumber>
          <StyledQuestionTextContainer>
            <StyledQuestionText isDisappearAnimation={isDisappearAnimation}>
              {currentQuestion.questionText}
            </StyledQuestionText>
          </StyledQuestionTextContainer>
          <StyledButtonsContainer
            onAnimationEnd={onAnimationEnd}
            isDisappearAnimation={isDisappearAnimation}
          >
            {currentQuestion.answers.map((answer, i) => {
              return (
                <Button
                  key={i}
                  text={answer.text}
                  onClick={() => onClickAnswer(answer.alphabet)}
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

const StyledQuestionImg = styled.img<{ isDisappearAnimation: boolean }>`
  width: 100%;
  height: 245px;
  margin-bottom: 15px;
  border-radius: 15px;
  ${({ theme }) => theme.animations.slideInFromRight.first};
  ${({ theme, isDisappearAnimation }) =>
    isDisappearAnimation && theme.animations.slideOutToLeft.first};
`;

const StyledQuestionNumber = styled.div<{ isDisappearAnimation: boolean }>`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  ${({ theme }) => theme.animations.slideInFromRight.second};
  ${({ theme, isDisappearAnimation }) =>
    isDisappearAnimation && theme.animations.slideOutToLeft.second};
`;

const StyledQuestionTextContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0 10px;
`;

const StyledQuestionText = styled.p<{ isDisappearAnimation: boolean }>`
  padding: 15px;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  ${({ theme }) => theme.animations.slideInFromRight.third};
  ${({ theme, isDisappearAnimation }) =>
    isDisappearAnimation && theme.animations.slideOutToLeft.third};
`;

const StyledButtonsContainer = styled.div<{ isDisappearAnimation: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 55%;
  ${({ theme }) => theme.animations.slideInFromRight.fourth};
  ${({ theme, isDisappearAnimation }) =>
    isDisappearAnimation && theme.animations.slideOutToLeft.fourth};
`;
