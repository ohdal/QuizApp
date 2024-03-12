import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NoteList } from "../types";
import { NOTE_STORAGE_KEY } from "../constants";
import NoteCard from "../components/NoteCard";

// 못해서 아쉬운 것들
//TODO: 오답들 난이도(difficulty) 통계 차트 표시
//TODO: 세션토큰 미설정으로 중복된 퀴즈가 내려올 수 있으므로, 중복 오답 체크 후 중요도 표시 기능
//TODO: seletor 추가 후 난이도별 필터 기능 등등 다양한 필터 기능
//TODO: 메모 저장 버튼이 아닌 debounce 기법 이용하여 자동 저장
//TODO: 공통된 ButtonStyle 처리  -> ?

const buttonStyle = "my-1 py-1 px-2 rounded-lg border border-slate-400";
export default function NotePage() {
  const [noteList, setNoteList] = useState<NoteList | null>(null);

  const storageSave = (idx: number, memo: string) => {
    if (noteList) {
      const arr = noteList?.concat([]);
      const note = arr[idx];

      arr.splice(idx, 1, { ...note, user_memo: memo });
      localStorage.setItem(NOTE_STORAGE_KEY, JSON.stringify(arr));

      alert("메모가 저장되었습니다.");
    }
  };

  useEffect(() => {
    const data = localStorage.getItem(NOTE_STORAGE_KEY);
    const list = data ? JSON.parse(data) : null;

    setNoteList(list.reverse());
  }, []);

  return (
    <div className="w-full h-full grid place-content-center relative">
      {noteList ? (
        <div className="w-2/3 mx-auto pr-3 overflow-auto">
          <div className="flex-col">
            {noteList.map((v, idx) => (
              <NoteCard
                key={`note-${idx}`}
                item={v}
                saveFunc={(memo: string) => {
                  storageSave(idx, memo);
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>오답노트가 존재하지 않습니다.</p>
      )}
      <button className={`absolute top-0 right-0 ${buttonStyle}`}>
        <Link to="/">홈으로</Link>
      </button>
    </div>
  );
}
