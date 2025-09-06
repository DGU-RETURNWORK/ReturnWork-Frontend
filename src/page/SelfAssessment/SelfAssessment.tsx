import { useState } from "react";
import Header from "../../components/Header";
import RoundButton from "../../components/RoundButton";
import "./SelfAssessment.css";

const SelfAssessment = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    confidence: true,
    workLife: true,
    relationships: true
  });

  const [answers, setAnswers] = useState<{ [key: string]: boolean }>({
    confidence1: true,
    confidence2: false,
    confidence3: false,
    confidence4: false,
    workLife1: false,
    workLife2: false,
    workLife3: false,
    workLife4: false,
    relationships1: true,
    relationships2: false,
    relationships3: false
  });

  const sections = [
    {
      id: "confidence",
      title: "1. 자기확신",
      questions: [
        { id: "confidence1", text: "질문" },
        { id: "confidence2", text: "질문" },
        { id: "confidence3", text: "질문" },
        { id: "confidence4", text: "질문" }
      ]
    },
    {
      id: "workLife",
      title: "2. 직업생활",
      questions: [
        { id: "workLife1", text: "질문" },
        { id: "workLife2", text: "질문" },
        { id: "workLife3", text: "질문" },
        { id: "workLife4", text: "질문" }
      ]
    },
    {
      id: "relationships",
      title: "3. 대인관계",
      questions: [
        { id: "relationships1", text: "질문" },
        { id: "relationships2", text: "질문" },
        { id: "relationships3", text: "질문" }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleAnswerChange = (questionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleContinue = () => {
    console.log("자가진단 답변:", answers);
    // 다음 단계로 이동하는 로직
  };

  const isFormValid = () => {
    return Object.values(answers).some(answer => answer === true);
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
                      <label className="SelfAssessment_checkbox_label">
                        <input
                          type="checkbox"
                          checked={answers[question.id]}
                          onChange={() => handleAnswerChange(question.id)}
                          className="SelfAssessment_checkbox"
                        />
                        <span className="SelfAssessment_checkmark"></span>
                        <span className="SelfAssessment_question_text">{question.text}</span>
                      </label>
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
