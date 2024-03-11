import { useEffect, useState } from "react";
import { Quiz } from "../types";
import { getRandomNum } from "../utils";
import QuizCardItem from "./QuizCardItem";

type Props = {
  quiz: Quiz;
  activeNextQuiz: () => void;
};

const badgeStyle = "rounded-md mr-2 p-1 text-white";

let correct_answer: number | null = null;
export default function QuizCard(props: Props) {
  const { quiz, activeNextQuiz } = props;
  const [answerList, setAnswerList] = useState<string[] | null>(null);
  const [answer, setAnswer] = useState<number | null>(null);

  useEffect(() => {
    // 랜덤한 위치에 정답 넣기
    setAnswer(null);

    correct_answer = getRandomNum(0, 4, true);
    const arr = quiz.incorrect_answers.concat([]);
    arr.splice(correct_answer, 0, quiz.correct_answer);
    setAnswerList(arr);
  }, [quiz]);

  return (
    <div>
      <div className="flex flex-row">
        <p className={`bg-gray-400 ${badgeStyle}`}>{quiz.category}</p>
        <p className={`bg-red-400 ${badgeStyle}`}>{quiz.difficulty}</p>
        <p className={`bg-sky-400 ${badgeStyle}`}>{quiz.type}</p>
      </div>
      <div>
        <p className="my-3 text-center">{quiz.question}</p>
        <div className="flex flex-col">
          {answerList &&
            answerList.map((v, idx) => (
              <QuizCardItem
                key={idx}
                itemInfo={{ text: v, color: idx === correct_answer ? "green" : "red" }}
                isCheck={answer === idx}
                isOpen={answer !== null}
                clickEvent={() => {
                  if (answer !== null) return;
                  setAnswer(idx);
                  activeNextQuiz();
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
