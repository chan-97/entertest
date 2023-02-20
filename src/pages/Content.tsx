import { FC, useState } from "react";
import { ContentFrame, StartPageView, QuestionPageView } from "components";
import { useContentQuestion } from "hooks";

export const Content: FC = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [{ currentQuestion }, { onClickAnswer }] = useContentQuestion();

  return (
    <ContentFrame paddingLeftRignt={isStart ? "55px" : "20px"}>
      {!isStart ? (
        <StartPageView onClickStartButton={() => setIsStart(true)} />
      ) : (
        <QuestionPageView
          currentQuestion={currentQuestion}
          onClickAnswer={onClickAnswer}
        />
      )}
    </ContentFrame>
  );
};
