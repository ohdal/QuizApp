import { useEffect, useCallback } from "react";
import { getQuizList } from "../apis";

export default function QuizPage() {
  const getQuizListFunc = useCallback(async () => {
    // const data = await getQuizList();
  }, []);

  useEffect(() => {
    getQuizListFunc();
  }, []);

  return <div>QuizPage</div>;
}
