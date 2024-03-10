type Props = {
  answer: string;
};

export default function QuizCardItem(props: Props) {
  const { answer } = props;
  return (
    <p>
      {answer}
      <span>✔</span>
    </p>
  );
}
