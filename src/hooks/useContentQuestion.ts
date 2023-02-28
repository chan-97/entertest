import { useState, Dispatch, SetStateAction } from "react";

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
  currentQuestionIndex: number;
  totalProgressStep: number;
}

export interface UseContentQuestionUpdate {
  setContentQuestion: Dispatch<SetStateAction<ContentQuestionState[]>>;
}

const initialContentQuestion = [
  {
    imgSrc: "question_emoji_1",
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
    imgSrc: "question_emoji_2",
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
    imgSrc: "question_emoji_3",
    questionNumber: 3,
    questionText: "내가 합격하고 싶은 기획사는?",
    answers: [
      {
        alphabet: "A",
        text: "사람 일 모른다!\n일단 기회가 주어지는 회사 어디든!"
      },
      {
        alphabet: "B",
        text: "무조건 안전빵! 대형 기획사 위주로"
      }
    ],
    active: false
  },
  {
    imgSrc: "question_emoji_4",
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
    imgSrc: "question_emoji_5",
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
  const [contentQuestion, setContentQuestion] = useState<
    ContentQuestionState[]
  >(initialContentQuestion);

  const currentQuestion = contentQuestion.find((question) => question.active);

  const currentQuestionIndex = contentQuestion.findIndex(
    (question) => question.active
  );

  return [
    {
      currentQuestion,
      currentQuestionIndex,
      totalProgressStep: contentQuestion.length
    },
    { setContentQuestion }
  ];
};
