import { FC } from "react";
import { ContentFrame, ProgressBar } from "components";

export const Question: FC = () => {
  return (
    <ContentFrame>
      <ProgressBar percentage={30} />
    </ContentFrame>
  );
};
