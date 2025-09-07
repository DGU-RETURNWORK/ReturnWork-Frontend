import { useState } from "react";
import Header from "../../components/Header";
import RoundButton from "../../components/RoundButton";
import "./SelfAssessment.css";

const SelfAssessment = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    cognitive: true,
    physical: true,
    adaptive: true
  });

  const [answers, setAnswers] = useState<{ [key: string]: number }>({
    cognitive1: 0,
    cognitive2: 0,
    cognitive3: 0,
    physical1: 0,
    physical2: 0,
    physical3: 0,
    physical4: 0,
    adaptive1: 0,
    adaptive2: 0,
    adaptive3: 0
  });

  const sections = [
    {
      id: "cognitive",
      title: "1. 인지 능력",
      questions: [
        { id: "cognitive1", text: "작업에 집중을 유지할 수 있는 시간은 어느 정도인가요?" },
        { id: "cognitive2", text: "새로운 작업 절차를 배울 때 이해 속도는 어떤가요?" },
        { id: "cognitive3", text: "최근 기억(방금 들은 지시 등)을 유지하는 데 어려움이 있나요?" }
      ]
    },
    {
      id: "physical",
      title: "2. 활동 능력",
      questions: [
        { id: "physical1", text: "하루에 몇 kg까지 반복적으로 들 수 있나요?" },
        { id: "physical2", text: "손가락을 이용한 세밀한 작업(나사 조립, 글씨쓰기 등)을 얼마나 잘 수행할 수 있나요?" },
        { id: "physical3", text: "서 있거나 걷는 동안 균형을 유지하는 데 어려움이 있나요?" },
        { id: "physical4", text: "하루에 무리 없이 일할 수 있는 시간은 어느 정도인가요?" }
      ]
    },
    {
      id: "adaptive",
      title: "3. 적응 능력",
      questions: [
        { id: "adaptive1", text: "다른 사람과 협력하여 작업할 때 불편함은 어느 정도인가요?" },
        { id: "adaptive2", text: "소음, 빛, 반복 동작 등 작업 환경에서 스트레스를 견디는 정도는 어떤가요?" },
        { id: "adaptive3", text: "사고 이후 본인의 자신감/사회적 활동 의지가 어느 정도인가요?" }
      ]
    }
  ];

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

  const handleAnswerChange = (questionId: string, score: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: score
    }));
  };

    const handleContinue = () => {
        console.log("자가진단 답변:", answers);
        // 다음 단계로 이동하는 로직
    };

    const handleSave = () => {
        console.log("임시저장:", answers);
        // 임시저장 로직
        alert("임시저장되었습니다.");
    };

  const isFormValid = () => {
    return Object.values(answers).every(answer => answer > 0);
  };

    return (
        <div className="SelfAssessment">
            <Header
                withBack={true}
                isLogin={true}
                userName="name"
                onMenuClick={() => console.log("메뉴 클릭")}
                onBackClick={() => console.log("뒤로가기")}
                onUserClick={() => console.log("사용자 클릭")}
                onSaveClick={handleSave}
            />

            <div className="SelfAssessment_content">
                <div className="SelfAssessment_header">
                    <h1 className="SelfAssessment_title">나의 자가진단</h1>
                    <div className="SelfAssessment_progress">5/5</div>
                </div>

                <div className="SelfAssessment_form">
                    {sections.map((section) => (
                        <div key={section.id} className="SelfAssessment_section">
                            <div
                                className="SelfAssessment_section_header"
                                onClick={() => toggleSection(section.id)}
                            >
                                <span className="SelfAssessment_section_title">{section.title}</span>
                                <span className={`SelfAssessment_arrow ${expandedSections[section.id] ? 'expanded' : ''}`}>
                                    ▼
                                </span>
                            </div>

              {expandedSections[section.id] && (
                <div className="SelfAssessment_questions">
                  {section.questions.map((question) => (
                    <div key={question.id} className="SelfAssessment_question">
                      <div className="SelfAssessment_question_text">{question.text}</div>
                      <div className="SelfAssessment_rating">
                        {[1, 2, 3, 4, 5].map((score) => (
                          <label key={score} className="SelfAssessment_rating_label">
                            <input
                              type="radio"
                              name={question.id}
                              value={score}
                              checked={answers[question.id] === score}
                              onChange={() => handleAnswerChange(question.id, score)}
                              className="SelfAssessment_radio"
                            />
                            <span className="SelfAssessment_radio_custom"></span>
                            <span className="SelfAssessment_score_text">{score}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
                        </div>
                    ))}
                </div>

                <div className="SelfAssessment_actions">
                    <div className="SelfAssessment_button_wrapper">
                        <RoundButton
                            text="계속하기"
                            size="large"
                            status={isFormValid() ? "active" : "inactive"}
                            onClick={handleContinue}
                        />
                    </div>
                </div>
            </div>

            <footer className="SelfAssessment_footer">
                <div className="SelfAssessment_copyright">
                    <span>2023 JOB. All rights reserved.</span>
                    <div className="SelfAssessment_links">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SelfAssessment;
