import Header from "../../components/Header";
import "./Resume.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

interface QuestionItem {
  id: string;
  title: string;
  createdAt: string;
}

const dummyQuestions: QuestionItem[] = [
  { id: "q1", title: "지원동기를 작성해주세요.", createdAt: "2025-09-02" },
  { id: "q2", title: "2번 문항", createdAt: "2025-09-02" },
  { id: "q3", title: "3번 문항", createdAt: "2025-09-02" },
  { id: "q4", title: "4번 문항", createdAt: "2025-09-02" },
];

const ResumeDetail = () => {
  const nav = useNavigate();
  const { resumeId } = useParams();
  const [questions, setQuestions] = useState<QuestionItem[]>(dummyQuestions);
  const [isOpen, setIsOpen] = useState(false);
  const [newQuestionTitle, setNewQuestionTitle] = useState("");

  const goQuestion = (qid: string) => {
    nav(`/resume/${resumeId}/question/${qid}`);
  };

  return (
    <div className="Resume">
      <Header withBack={true} isLogin={true} userName="name" onBackClick={() => nav(-1)} />

      <main className="Resume_container">
        <h1 className="Resume_title">자기소개서 제목</h1>

        <div className="Resume_filters">
          <div className="Resume_field">
            <label>직무선택</label>
            <input placeholder="컴퓨터 활용 능력" />
          </div>

          <div className="Resume_field">
            <label>경력 요약</label>
            <textarea placeholder="요약을 입력하세요" />
          </div>

          <div className="Resume_field">
            <label>강조할 역량</label>
            <input placeholder="컴퓨터 활용 능력" />
          </div>

          <button
            className="Resume_add small"
            aria-label="문항 추가"
            onClick={() => setIsOpen(true)}
          >
            +
          </button>
        </div>


        <ul className="Resume_list">
          {questions.map((q) => (
            <li key={q.id} className="Resume_card" onClick={() => goQuestion(q.id)}>
              <span className="Resume_card_title">{q.title}</span>
              <span className="Resume_card_date">{q.createdAt}</span>
            </li>
          ))}
        </ul>

        {isOpen && (
          <div className="Resume_modal_overlay" onClick={() => setIsOpen(false)}>
            <div className="Resume_modal" onClick={(e) => e.stopPropagation()}>
              <div className="Resume_modal_header">
                <h3>문항 추가</h3>
                <button className="Resume_modal_close" onClick={() => setIsOpen(false)}>×</button>
              </div>
              <div className="Resume_modal_body">
                <div className="Resume_field">
                  <label>문항 제목</label>
                  <input
                    name="questionTitle"
                    placeholder="문항을 입력해주세요."
                    value={newQuestionTitle}
                    onChange={(e) => setNewQuestionTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="Resume_modal_footer">
                <button className="Resume_reset" onClick={() => setIsOpen(false)}>취소</button>
                <button
                  className="Resume_primary"
                  onClick={() => {
                    if (!newQuestionTitle.trim()) return alert("문항 제목을 입력하세요");
                    const today = new Date().toISOString().slice(0, 10);
                    setQuestions((prev) => [
                      ...prev,
                      { id: String(Date.now()), title: newQuestionTitle.trim(), createdAt: today },
                    ]);
                    setNewQuestionTitle("");
                    setIsOpen(false);
                  }}
                >
                  추가
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ResumeDetail;


