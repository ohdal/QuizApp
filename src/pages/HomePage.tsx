import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h2>QUIZ APP</h2>
      <button>
        <Link to="/quiz">퀴즈 풀러가기</Link>
      </button>
      <button>
        <Link to="/note">오답노트</Link>
      </button>
    </div>
  );
}
