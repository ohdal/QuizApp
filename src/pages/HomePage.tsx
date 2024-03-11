import { Link } from "react-router-dom";

const buttonStyle = "my-1 py-1 px-2 rounded-lg border border-slate-400";
export default function HomePage() {
  return (
    <div className="w-full h-full grid place-content-center">
      <h2 className="text-center mb-2">QUIZ APP</h2>
      <div className="flex justify-center">
        <button className={`mr-2 ${buttonStyle}`}>
          <Link to="/quiz">퀴즈 풀러가기</Link>
        </button>
        <button className={buttonStyle}>
          <Link to="/note">오답노트</Link>
        </button>
      </div>
    </div>
  );
}
