import { Note } from "../types";
import QuizBadge from "./QuizBadge";
import NoteCardMemo from "./NoteCardMemo";

export type Props = {
  item: Note;
  saveFunc: (memo: string) => void;
};

export default function NoteCard(props: Props) {
  const { item, saveFunc } = props;

  const saveMemo = (memo: string) => {
    saveFunc(memo);
  };

  return (
    <div className="rounded-md mb-3 p-3 border border-slate-400">
      <QuizBadge category={item.category} difficulty={item.difficulty} type={item.type} />
      <div className="my-2">
        <p className="text-lg font-bold">Q. {item.question}</p>
        <p>선택: {item.user_choice}</p>
        <p>정답: {item.correct_answer}</p>
      </div>
      <NoteCardMemo initValue={item.user_memo || ""} saveFunc={saveMemo} />
    </div>
  );
}
