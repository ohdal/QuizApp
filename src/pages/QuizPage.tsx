import { useEffect, useState, useCallback } from "react";
import { getQuizList } from "../apis";
import { QuizList } from "../types";
import QuizCard from "../components/QuizCard";
import { Link } from "react-router-dom";

const buttonStyle = "my-1 py-1 px-2";

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
      // 임시
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
    <div className="w-full h-full grid place-content-center">
      <div className="flex flex-col">
        {quizList ? (
          <>
            <p>Quiz {quizIdx + 1}.</p>
            <QuizCard quiz={quizList[quizIdx]} />
            <div className="flex justify-center">
              {quizIdx < quizList.length - 1 ? (
                <button className={`${buttonStyle}`} onClick={() => setQuizIdx((v) => v + 1)}>
                  다음문항
                </button>
              ) : (
                <button className={`${buttonStyle}`}>
                  <Link to="/result">결과보기</Link>
                </button>
              )}
            </div>
          </>
        ) : (
          <div>...Loading</div>
        )}
      </div>
    </div>
  );
}
