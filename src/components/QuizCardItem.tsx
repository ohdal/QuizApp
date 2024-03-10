type Props = {
  text: string;
  checked: boolean;
  clickEvnet: () => void;
};

export default function QuizCardItem(props: Props) {
  const { text, checked, clickEvnet } = props;
  
  return (
    <button className="relative my-1 py-1 px-2 rounded-lg border border-slate-200 hover:bg-slate-200" onClick={clickEvnet}>
      {text}
      {checked && <span className="absolute right-2">✔</span>}
    </button>
  );
}
