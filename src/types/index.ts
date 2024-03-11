export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
};

export type QuizList = Array<Quiz>;

export type Note = Quiz | { date: Date; user_choice: string };

export type NoteList = Array<Note>;

export type Result = {
  time: number;
  correct: number;
  noteList: NoteList;
};
