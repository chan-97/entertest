import { FC } from "react";
import styled from "styled-components";
import { Button } from "components";

interface StartPageViewProps {
  onClickStartButton: () => void;
}

export const StartPageView: FC<StartPageViewProps> = ({
  onClickStartButton
}) => {
  return (
    <>
      <StyledLogoImgContainer>
        <StyledLogoImg />
      </StyledLogoImgContainer>
      <StyledContentSubjectContainer>
        <StyledContentTitle>
          재미로 보는
          <br />
          나와 성향이 유사한 아이돌은?
        </StyledContentTitle>
        <StyledSubjectImg />
      </StyledContentSubjectContainer>
      <StyledButtonContainer>
        <Button
          text="테스트 시작하기"
          onClick={onClickStartButton}
          width={"70%"}
        />
      </StyledButtonContainer>
    </>
  );
};

const StyledLogoImgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;
  padding-top: 36px;
`;

const StyledLogoImg = styled.img`
  width: 192px;
  height: 76px;
`;

const StyledContentSubjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 20px;
`;

const StyledContentTitle = styled.h1`
  margin-bottom: 70px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 26px;
  text-align: center;
`;

const StyledSubjectImg = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 15px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`;