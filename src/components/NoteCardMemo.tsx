import { useState } from "react";

export default function NoteCardMemo() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="grid justify-items-end">
      <textarea
        placeholder="메모를 입력하세요."
        className="w-full rounded-lg border border-slate-300"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="w-20 justify-self-end my-1 py-1 px-2 rounded-lg bg-gray-200">메모저장</button>
    </div>
  );
}
