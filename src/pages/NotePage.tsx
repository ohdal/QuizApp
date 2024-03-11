import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NoteList } from "../types";
import { NOTE_STORAGE_KEY } from "../constants";
import NoteCard from "../components/NoteCard";

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

    setNoteList(list);
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
