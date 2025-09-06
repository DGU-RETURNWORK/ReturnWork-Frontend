import { useState } from "react";
import Header from "../../components/Header";
import RoundButton from "../../components/RoundButton";
import WarningIcon from "../../assets/icons/Warning.svg";
import "./AccidentInfo.css";

const AccidentInfo = () => {
  const [formData, setFormData] = useState({
    industry: "제조업",
    accidentType: "기계작업 중 사고",
    injuredPart: "손 (왼쪽/오른쪽)",
    injurySeverity: "부분 손실",
    detailedInfo: ""
  });

  const industryOptions = [
    "제조업",
    "건설업",
    "운수업",
    "도소매업",
    "숙박업",
    "음식업",
    "기타"
  ];

  const accidentTypeOptions = [
    "기계작업 중 사고",
    "추락사고",
    "충돌사고",
    "화학물질 노출",
    "전기사고",
    "기타"
  ];

  const injuredPartOptions = [
    "손 (왼쪽/오른쪽)",
    "발 (왼쪽/오른쪽)",
    "머리",
    "목",
    "어깨",
    "팔 (왼쪽/오른쪽)",
    "다리 (왼쪽/오른쪽)",
    "기타"
  ];

  const injurySeverityOptions = [
    "부분 손실",
    "완전 손실",
    "기능 장애",
    "외상",
    "기타"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    return formData.industry && 
           formData.accidentType && 
           formData.injuredPart && 
           formData.injurySeverity && 
           formData.detailedInfo.trim().length > 0;
  };

  const handleContinue = () => {
    if (isFormValid()) {
      console.log("사고 정보:", formData);
      // 다음 단계로 이동하는 로직
    }
  };

  const handleWarningClick = () => {
    console.log("경고 아이콘 클릭");
    // 경고 관련 기능 구현
  };

  return (
    <div className="AccidentInfo">
      <Header 
        withBack={true} 
        isLogin={true} 
        userName="name"
        onMenuClick={() => console.log("메뉴 클릭")}
        onBackClick={() => console.log("뒤로가기")}
        onUserClick={() => console.log("사용자 클릭")}
      />
      
      <div className="AccidentInfo_content">
        <h1 className="AccidentInfo_title">사고 정보 입력</h1>
        
        <div className="AccidentInfo_form">
          <div className="AccidentInfo_form_left">
            <div className="AccidentInfo_form_row">
              <div className="AccidentInfo_field_with_warning">
                <div className="AccidentInfo_label_with_icon">
                  <img 
                    src={WarningIcon} 
                    alt="Warning" 
                    className="label-warning-icon" 
                    onClick={handleWarningClick}
                  />
                  <span className="field-label">산업군</span>
                </div>
                <select 
                  className="AccidentInfo_select"
                  value={formData.industry}
                  onChange={(e) => handleInputChange("industry", e.target.value)}
                >
                  {industryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="AccidentInfo_field_with_warning">
                <div className="AccidentInfo_label_with_icon">
                  <img 
                    src={WarningIcon} 
                    alt="Warning" 
                    className="label-warning-icon" 
                    onClick={handleWarningClick}
                  />
                  <span className="field-label">사고 유형</span>
                </div>
                <select 
                  className="AccidentInfo_select"
                  value={formData.accidentType}
                  onChange={(e) => handleInputChange("accidentType", e.target.value)}
                >
                  {accidentTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="AccidentInfo_form_row">
              <div className="AccidentInfo_field_with_warning">
                <div className="AccidentInfo_label_with_icon">
                  <img 
                    src={WarningIcon} 
                    alt="Warning" 
                    className="label-warning-icon" 
                    onClick={handleWarningClick}
                  />
                  <span className="field-label">부상 부위</span>
                </div>
                <select 
                  className="AccidentInfo_select"
                  value={formData.injuredPart}
                  onChange={(e) => handleInputChange("injuredPart", e.target.value)}
                >
                  {injuredPartOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="AccidentInfo_field_with_warning">
                <div className="AccidentInfo_label_with_icon">
                  <img 
                    src={WarningIcon} 
                    alt="Warning" 
                    className="label-warning-icon" 
                    onClick={handleWarningClick}
                  />
                  <span className="field-label">부상 정도</span>
                </div>
                <select 
                  className="AccidentInfo_select"
                  value={formData.injurySeverity}
                  onChange={(e) => handleInputChange("injurySeverity", e.target.value)}
                >
                  {injurySeverityOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="AccidentInfo_form_right">
            <div className="AccidentInfo_textarea_wrapper">
              <label className="AccidentInfo_textarea_label">상세 정보</label>
              <textarea
                className="AccidentInfo_textarea"
                value={formData.detailedInfo}
                onChange={(e) => handleInputChange("detailedInfo", e.target.value)}
                placeholder="200자 이내로 적어주세요."
                rows={8}
              />
            </div>
          </div>
        </div>
        
        <div className="AccidentInfo_actions">
          <div className="AccidentInfo_button_wrapper">
            <RoundButton
              text="계속하기"
              size="large"
              status={isFormValid() ? "active" : "inactive"}
              onClick={handleContinue}
            />
            <div className="AccidentInfo_step">0/5</div>
          </div>
        </div>
      </div>
      
      <footer className="AccidentInfo_footer">
        <div className="AccidentInfo_copyright">
          <span>2023 JOB. All rights reserved.</span>
          <div className="AccidentInfo_links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AccidentInfo;