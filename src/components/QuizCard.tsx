import { useEffect, useState } from "react";
import { Quiz } from "../types";
import QuizCardItem from "./QuizCardItem";

type Props = {
  quiz: Quiz;
};

const badgeStyle = "rounded-md mr-2 p-1 text-white";

export default function QuizCard(props: Props) {
  const { quiz } = props;
  const [answerList, setAnswerList] = useState<string[] | null>(null);

  useEffect(() => {
    // TODO: 정답 랜덤 섞기
    setAnswerList(quiz.incorrect_answers.concat(quiz.correct_answer));
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
          {answerList && answerList.map((v, idx) => <QuizCardItem key={idx} answer={v} />)}
        </div>
      </div>
    </div>
  );
}
