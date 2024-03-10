import { QuizList } from "../types";

const RES_CODE = [
  "Success",
  "No Results", // The API doesn't have enough questions for your query (Ex. Asking for 50 Questions in a Category that only has 20.)
  "Invalid Parameter", // Arguements passed in aren't valid. (Ex. Amount = Five)
  "Token Not Found ", // Session Token does not exist.
  "Token Empty ", // Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.
  "Rate Limit ", // Each IP can only access the API once every 5 seconds.
];

export const getQuizList = async (): Promise<QuizList | Error> => {
  const res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
  const data = await res.json();

  if (res.status === 200) {
    if (data.response_code === 0) return data.results;
    else throw new Error(RES_CODE[data.response_code]);
  } else {
    throw new Error("Error");
  }
};
