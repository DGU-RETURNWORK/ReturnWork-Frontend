import Header from "../../components/Header";
import RoundButton from "../../components/RoundButton";
import "./DiagnosisCheck.css";

const DiagnosisCheck = () => {
  const workTypes = [
    { name: "사무보조", percentage: 85 },
    { name: "품질검사", percentage: 70 },
    { name: "생산관리", percentage: 65 },
    { name: "실비점검", percentage: 45 }
  ];

  const possibleJobs = [
    "세밀한 손작업 필요 직무",
    "고정밀/조립 제작 작업",
    "중량물 취급이 많은 직무"
  ];

  const handleContinue = () => {
    console.log("다음 단계로 이동");
    // 다음 단계로 이동하는 로직
  };

  return (
    <div className="DiagnosisCheck">
      <Header 
        withBack={true} 
        isLogin={true} 
        userName="name"
        onMenuClick={() => console.log("메뉴 클릭")}
        onBackClick={() => console.log("뒤로가기")}
        onUserClick={() => console.log("사용자 클릭")}
      />
      
      <div className="DiagnosisCheck_content">
        <div className="DiagnosisCheck_card">
          <div className="DiagnosisCheck_intro">
            입력하신 '제조업, 기계 작업 중 왼쪽 손 부분 손실' 정보를 바탕으로 다음과 같은 직무 복귀 가능성이 있습니다.
          </div>
          
          <div className="DiagnosisCheck_results">
            <div className="DiagnosisCheck_work_types">
              <h3 className="DiagnosisCheck_section_title">가능한 작업 유형</h3>
              <div className="DiagnosisCheck_chart">
                {workTypes.map((workType, index) => (
                  <div key={index} className="DiagnosisCheck_chart_item">
                    <div className="DiagnosisCheck_chart_label">{workType.name}</div>
                    <div className="DiagnosisCheck_chart_bar_container">
                      <div 
                        className="DiagnosisCheck_chart_bar"
                        style={{ width: `${workType.percentage}%` }}
                      ></div>
                      <span className="DiagnosisCheck_chart_percentage">{workType.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="DiagnosisCheck_possible_jobs">
              <h3 className="DiagnosisCheck_section_title">가능한 직무</h3>
              <ul className="DiagnosisCheck_jobs_list">
                {possibleJobs.map((job, index) => (
                  <li key={index} className="DiagnosisCheck_job_item">
                    <span className="DiagnosisCheck_job_bullet"></span>
                    {job}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="DiagnosisCheck_actions">
        <div className="DiagnosisCheck_button_wrapper">
          <RoundButton
            text="계속하기"
            size="large"
            onClick={handleContinue}
          />
          <div className="DiagnosisCheck_step">2/5</div>
        </div>
      </div>
      
      <footer className="DiagnosisCheck_footer">
        <div className="DiagnosisCheck_copyright">
          <span>2023 JOB. All rights reserved.</span>
          <div className="DiagnosisCheck_links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DiagnosisCheck;