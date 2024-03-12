import { render, screen, fireEvent } from "@testing-library/react";
import QuizCard, { Props } from "../components/QuizCard";

const initialProps: Props = {
  quiz: {
    category: "category",
    correct_answer: "correct_answer",
    difficulty: "difficulty",
    incorrect_answers: ["inccorect_answer", "inccorect_answer", "inccorect_answer"],
    question: "quiestion",
    type: "type",
  },
  nextQuizFunc: () => {},
  answerCountFunc: () => {},
  setNoteList: () => {},
};

describe("QuizCard 컴포넌트 테스트", () => {
  let correctButton: HTMLElement;
  let incorrectButton: HTMLElement[];
  beforeEach(() => {
    render(<QuizCard {...initialProps} />);

    correctButton = screen.getByRole("button", { name: /correct_answer/ });
    incorrectButton = screen.getAllByRole("button", { name: /inccorect_answer/ });
    fireEvent.click(correctButton);
  });

  test("사용자 답변 선택 후, 퀴즈 정답, 오답 공개 테스트", () => {
    expect(correctButton.className.includes("bg-green-200")).toBeTruthy();
    for (let i = 0; i < incorrectButton.length; i++) {
      expect(incorrectButton[i].className.includes("bg-red-200")).toBeTruthy();
    }
  });

  test("사용자 답변 선택 후, 새로운 답변 선택 불가 처리 테스트", () => {
    expect(correctButton.hasAttribute("disabled")).toBeTruthy();
    for (let i = 0; i < incorrectButton.length; i++) {
      expect(incorrectButton[i].hasAttribute("disabled")).toBeTruthy();
    }
  });
});
