import { render, screen } from "@testing-library/react";
import NoteCardMemo, { Props } from "../components/NoteCardMemo";

describe("NoteCardMemo 컴포넌트 테스트", () => {
  const initValue = "initValue";
  beforeEach(() => {
    const initialProps: Props = {
      initValue,
      saveFunc: (memo: string) => {
        console.log(memo);
      },
    };

    render(<NoteCardMemo {...initialProps} />);
  });

  test("initValue 초깃값을 표시 테스트", () => {
    const memoTextarea = screen.getByDisplayValue(initValue);
    expect(memoTextarea);
  });
});
