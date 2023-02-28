import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { useGetTestResult } from "hooks";
import { ContentFrame, Button } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

export const Result: FC = () => {
  const navigate = useNavigate();
  const [resultData] = useGetTestResult();

  return (
    <>
      {resultData.name_eng && (
        <ContentFrame resultPageStyle>
          <StyledResultImgContainer>
            <StyledResultImg
              src={`/assets/result_${resultData.name_eng}.png`}
            />
          </StyledResultImgContainer>
          <StyledDescContainer>
            <StyledResultTitle>{resultData.name_kor}</StyledResultTitle>
            <StyledLine />
            <StyledDescription>
              {resultData.description.split("\n").map((sentence, i) => {
                return (
                  <StyledSentence key={i}>
                    {sentence}
                    <br />
                  </StyledSentence>
                );
              })}
            </StyledDescription>
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
              icon={
                <FontAwesomeIcon
                  icon={faArrowRotateLeft}
                  style={{ marginRight: "15px" }}
                  color="#fff"
                />
              }
            />
          </StyledRestartButtonContainer>
        </ContentFrame>
      )}
    </>
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

const StyledDescription = styled.div`
  padding: 10px 0;
  font-size: 18px;
  line-height: 1.5;
`;

const StyledSentence = styled.p`
  margin-bottom: 10px;
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
