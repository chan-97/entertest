import { FC } from "react";
import styled from "styled-components";
import { Button } from "components";
import { UseDisappearAnimationState } from "hooks/useDisappearAnimation";

interface StartPageViewProps extends UseDisappearAnimationState {
  onClickStartButton: () => void;
}

export const StartPageView: FC<StartPageViewProps> = ({
  onClickStartButton,
  isDisappearAnimation
}) => {
  return (
    <>
      <StyledLogoImgContainer>
        <StyledLogoImg isDisappearAnimation={isDisappearAnimation} />
      </StyledLogoImgContainer>
      <StyledContentSubjectContainer>
        <StyledContentTitle isDisappearAnimation={isDisappearAnimation}>
          재미로 보는
          <br />
          나와 성향이 유사한 아이돌은?
        </StyledContentTitle>
        <StyledSubjectImg isDisappearAnimation={isDisappearAnimation} />
      </StyledContentSubjectContainer>
      <StyledButtonContainer isDisappearAnimation={isDisappearAnimation}>
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

const StyledLogoImg = styled.img<{ isDisappearAnimation: boolean }>`
  width: 192px;
  height: 76px;
  ${({ theme }) => theme.animations.slideUp.first};
  ${({ theme, isDisappearAnimation }) =>
    isDisappearAnimation && theme.animations.slideOutToLeft.first};
`;

const StyledContentSubjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 20px;
`;

const StyledContentTitle = styled.h1<{ isDisappearAnimation: boolean }>`
  margin-bottom: 70px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 26px;
  text-align: center;
  ${({ theme }) => theme.animations.slideUp.second};
  ${({ theme, isDisappearAnimation }) =>
    isDisappearAnimation && theme.animations.slideOutToLeft.second};
`;

const StyledSubjectImg = styled.img<{ isDisappearAnimation: boolean }>`
  width: 100%;
  height: 280px;
  border-radius: 15px;
  ${({ theme }) => theme.animations.slideUp.third};
  ${({ theme, isDisappearAnimation }) =>
    isDisappearAnimation && theme.animations.slideOutToLeft.third};
`;

const StyledButtonContainer = styled.div<{ isDisappearAnimation: boolean }>`
  display: flex;
  justify-content: center;
  margin: 25px 0;
  ${({ theme }) => theme.animations.slideUp.fourth};
  ${({ theme, isDisappearAnimation }) =>
    isDisappearAnimation && theme.animations.slideOutToLeft.fourth};
`;
