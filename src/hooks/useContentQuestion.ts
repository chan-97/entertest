import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ContentAnswer {
  alphabet: string;
  text: string;
}

interface ContentQuestionState {
  imgSrc: string;
  questionNumber: number;
  questionText: string;
  answers: ContentAnswer[];
  active: boolean;
}

export interface UseContentQuestionState {
  currentQuestion: ContentQuestionState | undefined;
}

export interface UseContentQuestionUpdate {
  onClickAnswer: (
    currentQuestionNumber: number,
    answerAlphabet: string
  ) => void;
}

const initialContentQuestion = [
  {
    imgSrc: "",
    questionNumber: 1,
    questionText: "나는 몇살 때부터 오디션을 보기 시작했나요?",
    answers: [
      {
        alphabet: "A",
        text: "16살 이하"
      },
      {
        alphabet: "B",
        text: "17살 이상"
      }
    ],
    active: true
  },
  {
    imgSrc: "",
    questionNumber: 2,
    questionText: "나에게 열정이란?",
    answers: [
      {
        alphabet: "A",
        text: "안되면 될때까지!"
      },
      {
        alphabet: "B",
        text: "새로운 환경, 안해본 도전도 언제든지 OK"
      }
    ],
    active: false
  },
  {
    imgSrc: "",
    questionNumber: 3,
    questionText: "내가 합격하고 싶은 기획사는?",
    answers: [
      {
        alphabet: "A",
        text: "사람 일 모른다! 일단 기회가 주어지는 회사 어디든!"
      },
      {
        alphabet: "B",
        text: "무조건 안전빵! 대형 기획사 위주로"
      }
    ],
    active: false
  },
  {
    imgSrc: "",
    questionNumber: 4,
    questionText: "나는 지난 달에 오디션을 본 횟수가?",
    answers: [
      {
        alphabet: "A",
        text: "3회 이상"
      },
      {
        alphabet: "B",
        text: "0~2회"
      }
    ],
    active: false
  },
  {
    imgSrc: "",
    questionNumber: 5,
    questionText: "나는 오디션을 볼 때 어떤 마인드?",
    answers: [
      {
        alphabet: "A",
        text: "내가 잘하는 메인카드로 씹어먹겠어!"
      },
      {
        alphabet: "B",
        text: "당장은 떨어지더라도 다양한 경험을 쌓는다!"
      }
    ],
    active: false
  }
];

export const useContentQuestion = (): [
  UseContentQuestionState,
  UseContentQuestionUpdate
] => {
  const [totalA, setTotalA] = useState<number>(0);
  const [contentQuestion, setContentQuestion] = useState<
    ContentQuestionState[]
  >(initialContentQuestion);
  const navigate = useNavigate();

  const currentQuestion = contentQuestion.find((question) => question.active);

  const onClickAnswer = (
    currentQuestionNumber: number,
    answerAlphabet: string
  ) => {
    if (answerAlphabet === "A") {
      setTotalA((currentState) => currentState + 1);
    }

    // move question
    setContentQuestion((currentState) => {
      return currentState.map((question) => {
        return {
          ...question,
          active: question.questionNumber === currentQuestionNumber + 1
        };
      });
    });
  };

  useEffect(() => {
    if (!currentQuestion) {
      navigate(`result/${totalA}`);
    }
  }, [currentQuestion]);

  return [{ currentQuestion }, { onClickAnswer }];
};
