import { decode } from "html-entities";
import { QuizList, Quiz } from "../types";

const RES_CODE = [
  "Success",
  "No Results", // The API doesn't have enough questions for your query (Ex. Asking for 50 Questions in a Category that only has 20.)
  "Invalid Parameter", // Arguements passed in aren't valid. (Ex. Amount = Five)
  "Token Not Found ", // Session Token does not exist.
  "Token Empty ", // Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.
  "Rate Limit ", // Each IP can only access the API once every 5 seconds.
];

const decodeHtmlEntity = (data: Array<Quiz>): Array<Quiz> => {
  const arr = [];
  for (let i = 0; i < data.length; i++) {
    let quiz = {
      ...data[i],
      question: decode(data[i].question),
      correct_answer: decode(data[i].correct_answer),
      incorrect_answers: data[i].incorrect_answers.map((v) => decode(v)),
    };

    arr.push(quiz);
  }
  return arr;
};

export const getQuizList = async (size: number = 10): Promise<QuizList | Error> => {
  const res = await fetch(`https://opentdb.com/api.php?amount=${size}&type=multiple`);
  const data = await res.json();

  const decode = decodeHtmlEntity(data.results);

  if (res.status === 200) {
    if (data.response_code === 0) return decode;
    else throw new Error(RES_CODE[data.response_code]);
  } else {
    throw new Error("Error");
  }
};
