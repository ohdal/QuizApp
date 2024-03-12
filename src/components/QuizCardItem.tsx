type Props = {
  itemInfo: { text: string; color: string };
  isCheck: boolean;
  isOpen: boolean;
  clickEvent: () => void;
};

const buttonStyle: { [key: string]: string } = {
  default: "relative my-1 py-1 px-2 rounded-lg border border-slate-400 hover:bg-slate-200",
  green: "relative my-1 py-1 px-2 rounded-lg border border-slate-400 bg-green-200",
  red: "relative my-1 py-1 px-2 rounded-lg border border-slate-400 bg-red-200",
};

export default function QuizCardItem(props: Props) {
  const { itemInfo, isCheck, isOpen, clickEvent } = props;

  return (
    <button
      className={isOpen ? buttonStyle[itemInfo.color] : buttonStyle["default"]}
      disabled={isOpen}
      onClick={() => {
        clickEvent();
      }}
    >
      {itemInfo.text}
      {isCheck && <span className="absolute right-2">✔</span>}
    </button>
  );
}
