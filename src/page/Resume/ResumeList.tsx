import Header from "../../components/Header";
import "./Resume.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ResumeItem {
  id: string;
  title: string;
  createdAt: string;
}

const initialResumes: ResumeItem[] = [
  { id: "1", title: "자기소개서 제목", createdAt: "2025-09-02" },
  { id: "2", title: "자기소개서 제목", createdAt: "2025-09-02" },
  { id: "3", title: "자기소개서 제목", createdAt: "2025-09-02" },
  { id: "4", title: "자기소개서 제목", createdAt: "2025-09-02" },
  { id: "5", title: "자기소개서 제목", createdAt: "2025-09-02" },
];

const ResumeList = () => {
  const nav = useNavigate();
  const [resumes, setResumes] = useState<ResumeItem[]>(initialResumes);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    job: "",
    strength: "",
    questionCount: 1,
    career: "",
  });

  const goDetail = (id: string) => {
    nav(`/resume/${id}`);
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "questionCount" ? Number(value) : value,
    }));
  };

  const onSave = () => {
    if (!form.title.trim()) {
      alert("자기소개서 제목을 입력하세요");
      return;
    }
    const newItem: ResumeItem = {
      id: String(Date.now()),
      title: form.title,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    setResumes((prev) => [newItem, ...prev]);
    setForm({ title: "", job: "", strength: "", questionCount: 1, career: "" });
    setIsOpen(false);
  };

  return (
    <div className="Resume">
      <Header
        withBack={true}
        isLogin={true}
        userName="name"
        onBackClick={() => window.history.back()}
      />

      <main className="Resume_container">
        <h1 className="Resume_title">자기소개서</h1>

        <div className="Resume_toolbar">
          <button className="Resume_add" onClick={openModal}>+</button>
        </div>

        <ul className="Resume_list">
          {resumes.map((item) => (
            <li key={item.id} className="Resume_card" onClick={() => goDetail(item.id)}>
              <span className="Resume_card_title">{item.title}</span>
              <span className="Resume_card_date">{item.createdAt}</span>
            </li>
          ))}
        </ul>

        {isOpen && (
          <div className="Resume_modal_overlay" onClick={closeModal}>
            <div className="Resume_modal" onClick={(e) => e.stopPropagation()}>
              <div className="Resume_modal_header">
                <h3>새 자기소개서</h3>
                <button className="Resume_modal_close" onClick={closeModal}>×</button>
              </div>
              <div className="Resume_modal_body">
                <div className="Resume_field">
                  <label>자기소개서 제목</label>
                  <input
                    name="title"
                    placeholder="제목을 입력하세요"
                    value={form.title}
                    onChange={onChange}
                  />
                </div>

                <div className="Resume_field">
                  <label>직업</label>
                  <input
                    name="job"
                    placeholder="검색"
                    value={form.job}
                    onChange={onChange}
                  />
                </div>

                <div className="Resume_field">
                  <label>강조할 역량</label>
                  <select name="strength" value={form.strength} onChange={onChange}>
                    <option value="">선택하세요</option>
                    <option value="문서작성">문서작성</option>
                    <option value="커뮤니케이션">커뮤니케이션</option>
                    <option value="분석력">분석력</option>
                    <option value="문제해결">문제해결</option>
                  </select>
                </div>

                <div className="Resume_field">
                  <label>문항 개수</label>
                  <select
                    name="questionCount"
                    value={form.questionCount}
                    onChange={onChange}
                  >
                    {[1,2,3,4,5].map((n) => (
                      <option key={n} value={n}>{n}개</option>
                    ))}
                  </select>
                </div>

                <div className="Resume_field">
                  <label>경력 (200자 이내)</label>
                  <textarea
                    name="career"
                    maxLength={200}
                    placeholder="최근 경력 요약을 입력하세요"
                    value={form.career}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="Resume_modal_footer">
                <button className="Resume_reset" onClick={closeModal}>취소</button>
                <button className="Resume_primary" onClick={onSave}>저장</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ResumeList;


