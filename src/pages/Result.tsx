import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { ContentFrame, Button } from "components";
import result_kazuha from "assets/result_kazuha.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const Result: FC = () => {
  const navigate = useNavigate();

  return (
    <ContentFrame resultPageStyle>
      <StyledResultImgContainer>
        <StyledResultImg src={result_kazuha} />
      </StyledResultImgContainer>
      <StyledDescContainer>
        <StyledResultTitle>카즈하</StyledResultTitle>
        <StyledLine />
        <StyledDesc>
          당신의 오디션 성향은 15년간 해온 발레를 포기하고, 한국 아이돌에
          도전하는 카즈하의 용기를 닮았아요! 모든 것을 걸고 도전하는 당신에게는
          새로운 환경에 대한 두려움, 도전에 대한 막막함, 현실적인 문제따위는
          당신에게 아무런 영향도 주지 못합니다. 어쩌면 6개월만에 데뷔, 데뷔와
          동시에 1위 같은 기적같은 일들도 당신에게는 너무나 당연한 일이겠네요❤️
        </StyledDesc>
        <StyledShareText>친구에게 테스트 공유하기</StyledShareText>
        <StyledShareButtonsContainer>
          <CopyToClipboard
            text={window.location.href}
            onCopy={() => alert("링크가 복사되었습니다.")}
          >
            <StyledShareButton>
              <FontAwesomeIcon icon={faLink} color="#fff" />
            </StyledShareButton>
          </CopyToClipboard>
        </StyledShareButtonsContainer>
      </StyledDescContainer>
      <StyledRestartButtonContainer>
        <Button
          text="테스트 다시하기"
          onClick={() => navigate("/")}
          width={"70%"}
        />
      </StyledRestartButtonContainer>
    </ContentFrame>
  );
};

const StyledResultImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledResultImg = styled.img`
  max-height: 550px;
`;

const StyledDescContainer = styled.div`
  padding: 20px;
`;

const StyledResultTitle = styled.div`
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledLine = styled.div`
  width: 30px;
  height: 5px;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;
`;

const StyledDesc = styled.p`
  padding: 10px 0;
  font-size: 18px;
`;

const StyledShareText = styled.div`
  margin: 30px 0 20px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const StyledShareButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledShareButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #2ad481;
  cursor: pointer;
`;

const StyledRestartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 100px;
`;
