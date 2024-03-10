type Props = {
  answer: string;
};

export default function QuizCardItem(props: Props) {
  const { answer } = props;
  return (
    <button className="my-1 py-1 px-2 rounded-lg border border-slate-200 hover:bg-slate-200">
      {answer}
      <span className="float-right">✔</span>
    </button>
  );
}
