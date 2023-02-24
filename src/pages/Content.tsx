import { FC, useState } from "react";
import { ContentFrame, StartPageView, QuestionPageView } from "components";
import { useContentQuestion, useDisappearAnimation } from "hooks";

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
        <StartPageView
          setIsQuestionStart={setIsQuestionStart}
          isDisappearAnimation={isDisappearAnimation}
          onDisappearAnimation={onDisappearAnimation}
          offDisappearAnimation={offDisappearAnimation}
        />
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
