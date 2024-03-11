import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuizList } from "../apis";
import { QuizList, Result, Note } from "../types";
import { NOTE_STORAGE_KEY } from "../constants";
import QuizCard from "../components/QuizCard";

const buttonStyle = "my-1 py-1 px-2 rounded-lg border border-slate-400";

const size = 10;
let isPending = false;
let timerId: number | null = null;
let result: Result = { time: 0, correct: 0, noteList: [] };
export default function QuizPage() {
  const navigate = useNavigate();
  const [quizList, setQuizList] = useState<QuizList | null>(null);
  const [quizIdx, setQuizIdx] = useState<number>(0);
  const [btnVisible, setBtnVisible] = useState<boolean>(false);

  const saveResult = () => {
    const data = localStorage.getItem(NOTE_STORAGE_KEY);
    const arr = data ? JSON.parse(data as string) : [];

    // 이전 데이터와 합치기
    arr.push(...result.noteList);

    localStorage.setItem(NOTE_STORAGE_KEY, JSON.stringify(arr));
    navigate("/result", {
      state: { time: result.time, correct: result.correct, incorrect: size - result.correct },
    });
  };

  const getQuizListFunc = async () => {
    try {
      const data = await getQuizList(size);
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

    if (!timerId) {
      timerId = setInterval(() => {
        result.time++;
      }, 1000);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }

      result = { time: 0, correct: 0, noteList: [] };
    };
  }, []);

  return (
    <div className="w-full h-full grid place-content-center">
      <div className="flex flex-col relative pb-12">
        {quizList ? (
          <>
            <p className="text-xl font-bold">QUIZ {quizIdx + 1}.</p>
            <QuizCard
              quiz={quizList[quizIdx]}
              nextQuizFunc={() => {
                setBtnVisible(true);
              }}
              answerCountFunc={() => {
                result.correct++;
              }}
              setNoteList={(note: Note) => {
                result.noteList.push(note);
              }}
            />
            <div className="absolute bottom-0 right-0">
              {btnVisible &&
                (quizIdx < quizList.length - 1 ? (
                  <button
                    className={buttonStyle}
                    onClick={() => {
                      setBtnVisible(false);
                      setQuizIdx((v) => v + 1);
                    }}
                  >
                    다음문항 ➡
                  </button>
                ) : (
                  <button className={buttonStyle} onClick={saveResult}>
                    결과보기 ➡
                  </button>
                ))}
            </div>
          </>
        ) : (
          <div>...Loading</div>
        )}
      </div>
    </div>
  );
}
