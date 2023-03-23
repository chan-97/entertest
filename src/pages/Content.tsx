import { FC, useState } from "react";
import {
  ContentFrame,
  StartPageView,
  QuestionPageView,
  Footer
} from "components";
import { useContentQuestion, useDisappearAnimation } from "hooks";
import styled from "styled-components";

export const Content: FC = () => {
  const [isQuestionStart, setIsQuestionStart] = useState<boolean>(false);
  const [
    { isDisappearAnimation },
    { onDisappearAnimation, offDisappearAnimation }
  ] = useDisappearAnimation();
  const [
    { currentQuestion, currentQuestionIndex, totalProgressStep },
    { setContentQuestion }
  ] = useContentQuestion();

  return (
    <ContentFrame paddingLeftRignt={isQuestionStart ? "55px" : "20px"}>
      {!isQuestionStart ? (
        <>
          <StyledNav>
            <StyledTitle>아이돌테스트</StyledTitle>
          </StyledNav>
          <StartPageView
            setIsQuestionStart={setIsQuestionStart}
            isDisappearAnimation={isDisappearAnimation}
            onDisappearAnimation={onDisappearAnimation}
            offDisappearAnimation={offDisappearAnimation}
          />
          <Footer isAnimation />
        </>
      ) : (
        <QuestionPageView
          currentQuestionIndex={currentQuestionIndex}
          totalProgressStep={totalProgressStep}
          currentQuestion={currentQuestion}
          setContentQuestion={setContentQuestion}
          isDisappearAnimation={isDisappearAnimation}
          onDisappearAnimation={onDisappearAnimation}
          offDisappearAnimation={offDisappearAnimation}
        />
      )}
    </ContentFrame>
  );
};

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70px;
`;

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
`;
