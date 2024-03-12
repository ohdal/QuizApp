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

  test("initValue를 받아 초깃값을 표시한다.", () => {
    const memoTextarea = screen.getByDisplayValue(initValue);
    expect(memoTextarea);
  });
});
