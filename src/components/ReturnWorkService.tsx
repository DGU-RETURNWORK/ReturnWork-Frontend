import Button from "./Button";
import { FaStar } from "react-icons/fa";
import "./styles/ReturnWorkService.css";
import { useNavigate } from "react-router-dom";

export default function ReturnWorkService() {
  const cards = [
    { title: "직무 복귀 가능성 확인", subtitle: " 5분 소요" },
    { title: "적합 직무 추천", subtitle: " 5분 소요" },
    { title: "역량 보완 훈련", subtitle: " 5분 소요" },
    { title: "자기소개서 자동 생성", subtitle: " 5분 소요" },
  ];

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/accident_info");
  };

  return (
    <section className="returnwork_service">
      <div className="title">
        <h2>복귀 지원 서비스</h2>
        <Button text="시작하기" onClick={onClick} />
      </div>

      <div className="cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <p>{card.title}</p>
            <span>
              <FaStar color="0146B1" />
              {card.subtitle}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
