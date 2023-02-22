import { FC, useState } from "react";
import { ContentFrame, StartPageView, QuestionPageView } from "components";
import { useContentQuestion, useDisappearAnimation } from "hooks";

export const Content: FC = () => {
  const [isQuestionStart, setIsQuestionStart] = useState<boolean>(false);
  const [{ isDisappearAnimation }, { onDisappearAnimation }] =
    useDisappearAnimation();
  const [
    { currentQuestion, currentQuestionIndex, totalProgressStep },
    { onClickAnswer }
  ] = useContentQuestion();

  const onClickStartButton = () => {
    onDisappearAnimation();
    setTimeout(() => setIsQuestionStart(true), 1100);
  };

  return (
    <ContentFrame paddingLeftRignt={isQuestionStart ? "55px" : "20px"}>
      {!isQuestionStart ? (
        <StartPageView
          onClickStartButton={onClickStartButton}
          isDisappearAnimation={isDisappearAnimation}
        />
      ) : (
        <QuestionPageView
          currentQuestionIndex={currentQuestionIndex}
          totalProgressStep={totalProgressStep}
          currentQuestion={currentQuestion}
          onClickAnswer={onClickAnswer}
        />
      )}
    </ContentFrame>
  );
};
