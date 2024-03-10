import { useEffect, useState } from "react";
import { getQuizList } from "../apis";
import { QuizList } from "../types";
import QuizCard from "../components/QuizCard";

let isPending = false;
export default function QuizPage() {
  const [quizList, setQuizList] = useState<QuizList | null>(null);
  const [quizIdx, setQuizIdx] = useState<number>(0);

  const getQuizListFunc = async () => {
    try {
      const data = await getQuizList();
      setQuizList(data as QuizList);
      isPending = false;
    } catch (err) {
      setQuizList(null);
      alert(err);
    }
  };

  useEffect(() => {
    if (!isPending) {
      isPending = true;
      getQuizListFunc();
    }
  }, []);

  return (
    <div>
      {quizList ? <QuizCard quiz={quizList[quizIdx]} /> : <div>...Loading</div>}
      <div>
        <button onClick={() => setQuizIdx((v) => v + 1)}>다음문항</button>
      </div>
    </div>
  );
}
