import { render, screen } from "@testing-library/react";
import QuizBadge, { Props } from "../components/QuizBadge";

const initialProps: Props = {
  category: "category",
  difficulty: "easy",
  type: "type",
};

const difficultyColor: { [key: string]: string } = {
  easy: "bg-yellow-400",
  medium: "bg-green-400",
  hard: "bg-red-400",
};

describe("QuizBadge 컴포넌트 테스트", () => {
  test("퀴즈 난이도에 다른 배지 색상 테스트", () => {
    render(<QuizBadge {...initialProps} />);

    const value = initialProps.difficulty;
    expect(screen.getByText(value).className.includes(difficultyColor[value])).toBeTruthy();
  });
});
