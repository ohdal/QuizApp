import { useEffect, useState } from "react";

type Props = {
  initValue: string;
  saveFunc: (memo: string) => void;
};

export default function NoteCardMemo(props: Props) {
  const { initValue, saveFunc } = props;
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(initValue);
  }, []);

  return (
    <div className="grid justify-items-end">
      <textarea
        placeholder="메모를 입력하세요."
        defaultValue={initValue}
        className="w-full rounded-lg border border-slate-300"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="w-20 justify-self-end my-1 py-1 px-2 rounded-lg bg-gray-200"
        onClick={() => {
          if (value.trim()) saveFunc(value);
          else alert("메모를 입력해주세요.")
        }}
      >
        메모저장
      </button>
    </div>
  );
}
