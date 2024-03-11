import { useEffect, useState } from "react";
import { Quiz, Note } from "../types";
import { getRandomNum } from "../utils";
import QuizCardItem from "./QuizCardItem";
import QuizBadge from "./QuizBadge";

type Props = {
  quiz: Quiz;
  nextQuizFunc: () => void;
  answerCountFunc: () => void;
  setNoteList: (note: Note) => void;
};

let correct_answer: { idx: number; text: string } = { idx: -1, text: "" };

export default function QuizCard(props: Props) {
  const { quiz, nextQuizFunc, answerCountFunc, setNoteList } = props;
  const [answerList, setAnswerList] = useState<string[] | null>(null);
  const [answer, setAnswer] = useState<number | null>(null);

  const setResult = (answerIdx: number, correctIdx: number, choice: string) => {
    if (answerIdx === correctIdx) {
      answerCountFunc();
    } else {
      setNoteList({
        ...quiz,
        date: Date(),
        user_choice: choice,
      });
    }
  };

  useEffect(() => {
    // 사용자 선택 정답 초기화
    setAnswer(null);

    // 랜덤한 위치에 정답 넣기
    correct_answer = { idx: getRandomNum(0, 4, true), text: quiz.correct_answer };
    const arr = quiz.incorrect_answers.concat([]);
    arr.splice(correct_answer.idx, 0, correct_answer.text);
    setAnswerList(arr);
  }, [quiz]);

  return (
    <div>
      <QuizBadge category={quiz.category} difficulty={quiz.difficulty} type={quiz.type} />
      <div>
        <p className="my-3 text-center">{quiz.question}</p>
        <div className="flex flex-col">
          {answerList &&
            answerList.map((v, idx) => (
              <QuizCardItem
                key={idx}
                itemInfo={{ text: v, color: idx === correct_answer.idx ? "green" : "red" }}
                isCheck={answer === idx}
                isOpen={answer !== null}
                clickEvent={() => {
                  if (answer !== null) return;
                  setAnswer(idx);
                  setResult(idx, correct_answer.idx, answerList[idx]);
                  nextQuizFunc();
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
