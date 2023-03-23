import { FC, AnimationEvent, Dispatch, SetStateAction } from "react";
import styled, { useTheme } from "styled-components";
import { Button } from "components";
import {
  UseDisappearAnimationState,
  UseDisappearAnimationUpdate
} from "hooks/useDisappearAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface StartPageViewProps
  extends UseDisappearAnimationState,
    UseDisappearAnimationUpdate {
  setIsQuestionStart: Dispatch<SetStateAction<boolean>>;
}

export const StartPageView: FC<StartPageViewProps> = ({
  setIsQuestionStart,
  isDisappearAnimation,
  onDisappearAnimation,
  offDisappearAnimation
}) => {
  const theme = useTheme();

  const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (theme.animations.slideOutToLeft.animationName === e.animationName) {
      setIsQuestionStart(true);
      offDisappearAnimation();
    }
  };

  return (
    <>
      <StyledLogoImgContainer>
        <StyledLogoImg
          src="/assets/start_logo.png"
          isDisappearAnimation={isDisappearAnimation}
        />
      </StyledLogoImgContainer>
      <StyledContentSubjectContainer>
        <StyledContentTitle isDisappearAnimation={isDisappearAnimation}>
          재미로 보는
          <br />
          나와 성향이 유사한 아이돌은?
        </StyledContentTitle>
        <StyledMainImg
          src="/assets/start_main.png"
          isDisappearAnimation={isDisappearAnimation}
        />
      </StyledContentSubjectContainer>
      <StyledButtonContainer
        onAnimationEnd={onAnimationEnd}
        isDisappearAnimation={isDisappearAnimation}
      >
        <Button
          text="테스트 시작하기"
          onClick={onDisappearAnimation}
          width={"70%"}
          icon={
            <FontAwesomeIcon
              icon={faPlay}
              style={{ marginRight: "15px" }}
              color="#fff"
            />
          }
        />
      </StyledButtonContainer>
    </>
  );
};

const StyledLogoImgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;
  padding-top: 20px;
`;

const StyledLogoImg = styled.img<{ isDisappearAnimation: boolean }>`
  width: 90px;
  height: 90px;
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
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 26px;
  text-align: center;
  ${({ theme }) => theme.animations.slideUp.second};
  ${({ theme, isDisappearAnimation }) =>
    isDisappearAnimation && theme.animations.slideOutToLeft.second};
`;

const StyledMainImg = styled.img<{ isDisappearAnimation: boolean }>`
  width: 100%;
  height: auto;
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
