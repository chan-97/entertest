import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ContentFrame, Button } from "components";

export const Main: FC = () => {
  const navigate = useNavigate();

  return (
    <ContentFrame>
      <Button text="테스트 시작하기" onClick={() => navigate("/question")} />
    </ContentFrame>
  );
};
