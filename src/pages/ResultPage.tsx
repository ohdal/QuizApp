import { Link } from "react-router-dom";

export default function ResultPage() {
  return (
    <div>
      ResultPage
      <button>
        <Link to="/">홈으로</Link>
        <Link to="/note">오답노트 보러가기</Link>
      </button>
    </div>
  );
}
