import Header from "../../components/Header";
import "./Resume.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ResumeQuestion = () => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    title: "지원동기를 입력해주세요.",
    prompt: "프로프롬프트를 작성해주세요.",
    content:
      "[ ",
  });

  return (
    <div className="Resume">
      <Header withBack={true} isLogin={true} userName="name" onBackClick={() => nav(-1)} />

      <main className="Resume_question_container">
        <div className="Resume_question_left">
          <div className="Resume_field">
            <label>1번 문항</label>
            <input
              placeholder="지원동기를 입력해주세요."
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
            />
          </div>

          <div className="Resume_field">
            <label>자기소개서 문항</label>
            <textarea
              placeholder="프로프롬프트를 작성해주세요."
              value={input.prompt}
              onChange={(e) => setInput({ ...input, prompt: e.target.value })}
            />
          </div>

          <div className="Resume_actions">
            <input className="Resume_input_small" placeholder="글자수를 입력해주세요." />
            <button className="Resume_confirm">확인</button>
          </div>

          <div className="Resume_bottom_bar">
            <button className="Resume_reset">재설정</button>
            <button className="Resume_primary">자기소개서 생성하기</button>
          </div>
        </div>

        <div className="Resume_question_right">
          <div className="Resume_editor">
            <div className="Resume_editor_header">자소서 생성</div>
            <textarea
              className="Resume_editor_textarea"
              value={input.content}
              onChange={(e) => setInput({ ...input, content: e.target.value })}
            />
            <div className="Resume_editor_footer">
              <div className="Resume_counter">154/5000</div>
              <button className="Resume_save">저장하기</button>
            </div>
          </div>

          <div className="Resume_question_tabs">
            <button className="Resume_tab active">1번 문항</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumeQuestion;


