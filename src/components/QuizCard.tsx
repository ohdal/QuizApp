import { useEffect, useState } from "react";
import { Quiz } from "../types";
import QuizCardItem from "./QuizCardItem";

type Props = {
  quiz: Quiz;
};

export default function QuizCard(props: Props) {
  const { quiz } = props;
  const [answerList, setAnswerList] = useState<string[] | null>(null);

  useEffect(() => {
    setAnswerList(quiz.incorrect_answers.concat(quiz.correct_answer));
  }, [quiz]);

  return (
    <div>
      <div className="flex flex-row">
        <p className="">{quiz.category}</p>
        <p className="">{quiz.difficulty}</p>
        <p className="">{quiz.type}</p>
      </div>
      <div>
        <p>{quiz.question}</p>
        {answerList && answerList.map((v, idx) => <QuizCardItem key={idx} answer={v} />)}
      </div>
    </div>
  );
}
