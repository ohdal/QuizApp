import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NoteCard, { Props } from "../components/NoteCard";

const item = {
  category: "category",
  correct_answer: "correct_answer",
  difficulty: "difficulty",
  incorrect_answers: ["incorrect_answers", "incorrect_answers", "incorrect_answers"],
  question: "question",
  type: "type",
  date: Date(),
  user_choice: "user_choice",
};

const saveFunc = (memo: string) => {
  console.log(memo);
};

describe("NoteCard 컴포넌트 테스트", () => {
  test("Note 타입의 데이터를 전달받아 화면에 정상적으로 렌더링 한다. (메모 초깃값 없음)", () => {
    // given - NoteCard 컴포넌트를 화면에 표시한다.
    // when - Note 타입의 데이터를 전달받았을 때
    const initialProps: Props = {
      item: item,
      saveFunc,
    };

    render(<NoteCard {...initialProps} />);

    // then - 에러 없이 화면에 정상적으로 렌더링
    expect(screen.getByText(item.category)).toBeInTheDocument();
    expect(screen.getByText(item.difficulty)).toBeInTheDocument();
    expect(screen.getByText(item.type)).toBeInTheDocument();
    expect(screen.getByText("Q. " + item.question)).toBeInTheDocument();
    expect(screen.getByText("선택: " + item.user_choice)).toBeInTheDocument();
    expect(screen.getByText("정답: " + item.correct_answer)).toBeInTheDocument();
  });
});
