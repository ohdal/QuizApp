import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NoteList } from "../types";
import { NOTE_STORAGE_KEY } from "../constants";
import NoteCard from "../components/NoteCard";

const buttonStyle = "my-1 py-1 px-2 rounded-lg border border-slate-400";
export default function NotePage() {
  const [noteList, setNoteList] = useState<NoteList | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(NOTE_STORAGE_KEY);
    const list = data ? JSON.parse(data) : null;

    setNoteList(list);
  }, []);

  return (
    <div className="w-full h-full grid place-content-center relative">
      <div className="w-2/3 mx-auto overflow-auto">
        <div className="flex-col">
          {noteList ? (
            noteList.map((v, idx) => <NoteCard key={`note-${idx}`} item={v} />)
          ) : (
            <p>오답노트가 존재하지 않습니다.</p>
          )}
        </div>
      </div>
      <button className={`absolute top-0 right-0 ${buttonStyle}`}>
        <Link to="/">홈으로</Link>
      </button>
    </div>
  );
}
