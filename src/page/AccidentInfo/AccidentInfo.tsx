import { useState } from "react";
import Header from "../../components/Header";
import RoundButton from "../../components/RoundButton";
import WarningIcon from "../../assets/icons/Warning.svg";
import "./AccidentInfo.css";

const AccidentInfo = () => {
  const [formData, setFormData] = useState({
    industry: "농업, 임업 및 어업",
    accidentType: "떨어짐(높이가 있는 곳에서 사람이 떨어짐)",
    injuredPart: "머리",
    injurySeverity: "골절",
    detailedInfo: ""
  });

  const industryOptions = [
    "농업, 임업 및 어업",
    "광업",
    "제조업",
    "전기, 가스, 증기 및 공기조절 공급업",
    "수도, 하수 및 폐기물 처리, 원료 재생업",
    "건설업",
    "도매 및 소매업",
    "운수 및 창고업",
    "숙박 및 음식점업",
    "정보통신업",
    "금융 및 보험업",
    "부동산업",
    "전문, 과학 및 기술 서비스업",
    "사업시설 관리, 사업 지원 및 임대 서비스업",
    "공공행정, 국방 및 사회보장 행정",
    "교육 서비스업",
    "보건업 및 사회복지 서비스업",
    "예술, 스포츠 및 여가관련 서비스업",
    "협회 및 단체, 수리 및 기타 개인 서비스업",
    "가구 내 고용활동 및 달리 분류되지 않은 자가소비 생산활동",
    "국제 및 외국기관"
  ];

  const accidentTypeOptions = [
    "떨어짐(높이가 있는 곳에서 사람이 떨어짐)",
    "넘어짐(사람이 미끄러지거나 넘어짐)",
    "깔림(물체의 쓰러짐이나 뒤집힘)",
    "부딪힘(물체에 부딪힘)",
    "맞음(날아오거나 떨어진 물체에 맞음)",
    "무너짐(건축물이나 쌓여진 물체가 무너짐)",
    "끼임(기계설비에 끼이거나 감김)",
    "절단·베임·찔림",
    "감전",
    "폭발·파열",
    "화재",
    "불균형 및 무리한 동작",
    "이상온도·물체접촉",
    "화학물질누출·접촉",
    "산소결핍",
    "빠짐·익사",
    "사업장내 교통사고",
    "사업장외 교통사고",
    "해상항공 교통사고",
    "체육행사 등의 사고",
    "폭력행위",
    "동물상해",
    "기타",
    "물리적인자",
    "유기화합물",
    "허가대상",
    "금속류",
    "화학적인자 기타",
    "생물학적인자",
    "독성간염",
    "직업성암",
    "직업병기타",
    "진폐",
    "뇌혈관질환",
    "심장질환",
    "비사고성·작업관련성요통",
    "사고성요통",
    "수근관증후군",
    "신체에 과도한 부담을 주는 작업",
    "간질환",
    "정신질환",
    "작업관련성질병 기타",
    "분류불능"
  ];

  const injuredPartOptions = [
    "머리",
    "눈",
    "목",
    "어깨",
    "팔",
    "손",
    "손가락",
    "등",
    "척추",
    "몸통",
    "다리",
    "발",
    "발가락",
    "전신",
    "신체 내부기관(소화, 신경, 순환, 호흡배설 등)"
  ];

  const injurySeverityOptions = [
    "골절",
    "절단",
    "타박상",
    "찰과상",
    "화상",
    "중독·질식",
    "감전",
    "뇌진탕",
    "고혈압",
    "뇌졸중",
    "피부염",
    "진폐",
    "수근관증후군",
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