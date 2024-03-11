const difficultyColor: {[key: string]: string} = {
  easy: "bg-yellow-400",
  medium: "bg-green-400",
  hard: "bg-red-400",
}

type Props = {
  category: string;
  difficulty: string;
  type: string;
};

const badgeStyle = "rounded-md mr-2 p-1 text-white text-xs";

export default function Badge(props: Props) {
  const { category, difficulty, type } = props;
  return (
    <div className="flex flex-row">
      <p className={`bg-gray-400 ${badgeStyle}`}>{type}</p>
      <p className={`bg-gray-500 ${badgeStyle}`}>{category}</p>
      <p className={`${badgeStyle} ${difficultyColor[difficulty]}`}>{difficulty}</p>
    </div>
  );
}
