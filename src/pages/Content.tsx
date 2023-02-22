import { FC, useEffect, useState } from "react";
import { ContentFrame, StartPageView, QuestionPageView } from "components";
import { useContentQuestion } from "hooks";

export const Content: FC = () => {
  const [isQuestionStart, setIsQuestionStart] = useState<boolean>(false);
  const [disappearAnimation, setDisappearAnimation] = useState<boolean>(false);
  const [
    { currentQuestion, currentQuestionIndex, totalProgressStep },
    { onClickAnswer }
  ] = useContentQuestion();

  const onClickStartButton = () => {
    setDisappearAnimation(true);
    setTimeout(() => setIsQuestionStart(true), 1100);
  };

  useEffect(() => {
    if (disappearAnimation) {
      setTimeout(() => setDisappearAnimation(false), 3000);
    }
  }, [disappearAnimation]);

  return (
    <ContentFrame paddingLeftRignt={isQuestionStart ? "55px" : "20px"}>
      {!isQuestionStart ? (
        <StartPageView
          onClickStartButton={onClickStartButton}
          disappearAnimation={disappearAnimation}
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
