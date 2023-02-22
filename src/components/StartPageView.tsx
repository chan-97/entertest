import { FC } from "react";
import styled from "styled-components";
import { Button } from "components";

interface StartPageViewProps {
  onClickStartButton: () => void;
  disappearAnimation: boolean;
}

export const StartPageView: FC<StartPageViewProps> = ({
  onClickStartButton,
  disappearAnimation
}) => {
  return (
    <>
      <StyledLogoImgContainer>
        <StyledLogoImg disappearAnimation={disappearAnimation} />
      </StyledLogoImgContainer>
      <StyledContentSubjectContainer>
        <StyledContentTitle disappearAnimation={disappearAnimation}>
          재미로 보는
          <br />
          나와 성향이 유사한 아이돌은?
        </StyledContentTitle>
        <StyledSubjectImg disappearAnimation={disappearAnimation} />
      </StyledContentSubjectContainer>
      <StyledButtonContainer disappearAnimation={disappearAnimation}>
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

const StyledLogoImg = styled.img<{ disappearAnimation: boolean }>`
  width: 192px;
  height: 76px;
  ${({ theme }) => theme.animations.slideUp.first};
  ${({ theme, disappearAnimation }) =>
    disappearAnimation && theme.animations.slideOutToLeft.first};
`;

const StyledContentSubjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 20px;
`;

const StyledContentTitle = styled.h1<{ disappearAnimation: boolean }>`
  margin-bottom: 70px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 26px;
  text-align: center;
  ${({ theme }) => theme.animations.slideUp.second};
  ${({ theme, disappearAnimation }) =>
    disappearAnimation && theme.animations.slideOutToLeft.second};
`;

const StyledSubjectImg = styled.img<{ disappearAnimation: boolean }>`
  width: 100%;
  height: 280px;
  border-radius: 15px;
  ${({ theme }) => theme.animations.slideUp.third};
  ${({ theme, disappearAnimation }) =>
    disappearAnimation && theme.animations.slideOutToLeft.third};
`;

const StyledButtonContainer = styled.div<{ disappearAnimation: boolean }>`
  display: flex;
  justify-content: center;
  margin: 25px 0;
  ${({ theme }) => theme.animations.slideUp.fourth};
  ${({ theme, disappearAnimation }) =>
    disappearAnimation && theme.animations.slideOutToLeft.fourth};
`;
