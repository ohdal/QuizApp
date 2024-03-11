import { Note } from "../types";
import QuizBadge from "./QuizBadge";
import NoteCardMemo from "./NoteCardMemo";

type Props = {
  item: Note;
};

export default function NoteCard(props: Props) {
  const { item } = props;

  return (
    <div className="rounded-md mb-2 p-2 border border-slate-400">
      <QuizBadge category={item.category} difficulty={item.difficulty} type={item.type} />
      <div className="mb-2">
        <p className="text-lg font-bold">Q. {item.question}</p>
        <p>선택: {item.user_choice}</p>
        <p>정답: {item.correct_answer}</p>
      </div>
      <NoteCardMemo />
    </div>
  );
}
