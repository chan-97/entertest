import { FC, useState } from "react";
import { ContentFrame, StartPageView, QuestionPageView } from "components";

export const Content: FC = () => {
  const [isStart, setIsStart] = useState<boolean>(false);

  return (
    <ContentFrame paddingLeftRignt={isStart ? "55px" : "20px"}>
      {!isStart ? (
        <StartPageView onClickStartButton={() => setIsStart(true)} />
      ) : (
        <QuestionPageView />
      )}
    </ContentFrame>
  );
};
