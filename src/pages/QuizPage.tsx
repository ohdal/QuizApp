import { useEffect, useCallback, useState } from "react";
import { getQuizList } from "../apis";
import { QuizList } from "../apis/type";

export default function QuizPage() {
  const [quizList, setQuizList] = useState<QuizList | null>();

  const getQuizListFunc = async () => {
    const data = await getQuizList();

    if (data) {
      setQuizList(data as QuizList);
    } else {
      setQuizList(null);
    }
  };

  useEffect(() => {
    getQuizListFunc();
  }, []);

  return <div>QuizPage</div>;
}
