export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
};

export type QuizList = Array<Quiz>;

export type Note = Quiz & { date: string; user_choice: string; user_memo?: string };

export type NoteList = Array<Note>;

export type Result = {
  time: number;
  correct: number;
  noteList: NoteList;
};
