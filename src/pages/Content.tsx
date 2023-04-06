import { FC, useState } from "react";
import {
  ContentFrame,
  StartPageView,
  QuestionPageView,
  AdfitBanner,
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
          <AdfitBanner
            className="adfit--300250"
            dataAdUnit="DAN-aIgIwJjE7qp66ty3"
            dataAdWidth={300}
            dataAdHeight={250}
          />
          <AdfitBanner
            className="adfit--250250"
            dataAdUnit="DAN-JOhFAvgNnb4cz0RH"
            dataAdWidth={250}
            dataAdHeight={250}
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
