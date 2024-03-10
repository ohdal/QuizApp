export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
};

export type QuizList = Array<Quiz>;
