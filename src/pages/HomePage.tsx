import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-full h-full grid place-content-center">
      <h2 className="text-center">QUIZ APP</h2>
      <div className="flex justify-center">
        <button className="bg-emerald-500 mr-1">
          <Link to="/quiz">퀴즈 풀러가기</Link>
        </button>
        <button className="bg-emerald-500">
          <Link to="/note">오답노트</Link>
        </button>
      </div>
    </div>
  );
}
