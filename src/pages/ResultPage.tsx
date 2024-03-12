import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type CustomLabel = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props: CustomLabel) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const buttonStyle = "my-1 py-1 px-2 rounded-lg border border-slate-400";
export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<Array<{ name: string; value: number; color: string }>>([]);
  const [info, setInfo] = useState<{ time: number; correct: number }>({ time: 0, correct: 0 });

  useEffect(() => {
    if (location.state) {
      const { time, correct, incorrect } = location.state;
      const arr = [
        { name: "Correct", value: correct, color: "#4ade80" },
        { name: "Incorrect", value: incorrect, color: "#f87171" },
      ];

      setData(arr);
      setInfo({
        time,
        correct,
      });
    } else {
      alert("잘못된 접근입니다. 홈화면으로 돌아갑니다.");
      navigate("/");
      return;
    }
  }, []);

  return (
    <div className="w-full h-full grid place-content-center">
      <div className="flex flex-col p-3">
        <div style={{ width: "300px", height: "300px" }} className="relative mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                dataKey="value"
                nameKey="name"
              >
                {data.map((v, index) => (
                  <Cell key={`cell-${index}`} fill={v.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="w-full absolute top-0 left-0 p-2 text-center">
            {data.map((v, idx) => (
              <div key={`text-${idx}`} className="inline-block mr-3">
                <p className="w-2.5 h-2.5 inline-block mr-1" style={{ backgroundColor: v.color }} />
                {v.name}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <p>
            소요시간 : <span>{info.time}'s</span>
          </p>
          <p>
            정답: <span>{info.correct}문항</span>
          </p>
        </div>
      </div>
      <div className=" flex flex-row justify-center">
        <button className={`mr-2 ${buttonStyle}`}>
          <Link to="/">홈으로</Link>
        </button>
        <button className={buttonStyle}>
          <Link to="/note">오답노트 보러가기</Link>
        </button>
      </div>
    </div>
  );
}
