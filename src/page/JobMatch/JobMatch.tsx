import { useState } from "react";
import Header from "../../components/Header";
import RoundButton from "../../components/RoundButton";
import JobMatchCard from "../../components/JobMatchCard";
import "./JobMatch.css";

const JobMatch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const jobRecommendations = [
    {
      jobCategory: "사무행정",
      profileImage: "https://i.pravatar.cc/150?img=1",
      recommendationReason: "문서 처리 능력과 꼼꼼함이 돋보이며, 조직 내 소통과 협업에도 강점을 보입니다. 정확성과 책임감이 요구되는 사무행정 직무에 적합한 성향입니다.",
      suitabilityScore: 92,
      buttonText: "상세 정보",
      onButtonClick: () => console.log("상세 정보 클릭")
    },
    {
      jobCategory: "사무행정",
      profileImage: "https://i.pravatar.cc/150?img=2",
      recommendationReason: "문서 처리 능력과 꼼꼼함이 돋보이며, 조직 내 소통과 협업에도 강점을 보입니다. 정확성과 책임감이 요구되는 사무행정 직무에 적합한 성향입니다.",
      suitabilityScore: 92,
      buttonText: "상세 정보",
      onButtonClick: () => console.log("상세 정보 클릭")
    },
    {
      jobCategory: "사무행정",
      profileImage: "https://i.pravatar.cc/150?img=3",
      recommendationReason: "문서 처리 능력과 꼼꼼함이 돋보이며, 조직 내 소통과 협업에도 강점을 보입니다. 정확성과 책임감이 요구되는 사무행정 직무에 적합한 성향입니다.",
      suitabilityScore: 92,
      buttonText: "상세 정보",
      onButtonClick: () => console.log("상세 정보 클릭")
    },
    {
      jobCategory: "고객서비스",
      profileImage: "https://i.pravatar.cc/150?img=4",
      recommendationReason: "친화력과 소통 능력이 뛰어나며, 고객의 요구사항을 정확히 파악하고 해결하는 능력이 탁월합니다. 고객 만족도 향상에 기여할 수 있는 적합한 인재입니다.",
      suitabilityScore: 78,
      buttonText: "상세 정보",
      onButtonClick: () => console.log("상세 정보 클릭")
    },
    {
      jobCategory: "고객서비스",
      profileImage: "https://i.pravatar.cc/150?img=5",
      recommendationReason: "친화력과 소통 능력이 뛰어나며, 고객의 요구사항을 정확히 파악하고 해결하는 능력이 탁월합니다. 고객 만족도 향상에 기여할 수 있는 적합한 인재입니다.",
      suitabilityScore: 75,
      buttonText: "상세 정보",
      onButtonClick: () => console.log("상세 정보 클릭")
    },
    {
      jobCategory: "고객서비스",
      profileImage: "https://i.pravatar.cc/150?img=6",
      recommendationReason: "친화력과 소통 능력이 뛰어나며, 고객의 요구사항을 정확히 파악하고 해결하는 능력이 탁월합니다. 고객 만족도 향상에 기여할 수 있는 적합한 인재입니다.",
      suitabilityScore: 72,
      buttonText: "상세 정보",
      onButtonClick: () => console.log("상세 정보 클릭")
    },
    {
      jobCategory: "데이터분석",
      profileImage: "https://i.pravatar.cc/150?img=7",
      recommendationReason: "논리적 사고와 분석적 접근이 뛰어나며, 복잡한 데이터를 체계적으로 정리하고 인사이트를 도출하는 능력이 우수합니다. 데이터 기반 의사결정에 기여할 수 있습니다.",
      suitabilityScore: 65,
      buttonText: "상세 정보",
      onButtonClick: () => console.log("상세 정보 클릭")
    },
    {
      jobCategory: "데이터분석",
      profileImage: "https://i.pravatar.cc/150?img=8",
      recommendationReason: "논리적 사고와 분석적 접근이 뛰어나며, 복잡한 데이터를 체계적으로 정리하고 인사이트를 도출하는 능력이 우수합니다. 데이터 기반 의사결정에 기여할 수 있습니다.",
      suitabilityScore: 62,
      buttonText: "상세 정보",
      onButtonClick: () => console.log("상세 정보 클릭")
    },
    {
      jobCategory: "데이터분석",
      profileImage: "https://i.pravatar.cc/150?img=9",
      recommendationReason: "논리적 사고와 분석적 접근이 뛰어나며, 복잡한 데이터를 체계적으로 정리하고 인사이트를 도출하는 능력이 우수합니다. 데이터 기반 의사결정에 기여할 수 있습니다.",
      suitabilityScore: 58,
      buttonText: "상세 정보",
      onButtonClick: () => console.log("상세 정보 클릭")
    }
  ];

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(jobRecommendations.length / cardsPerSlide);
  const currentCards = jobRecommendations.slice(
    currentSlide * cardsPerSlide,
    (currentSlide + 1) * cardsPerSlide
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleContinue = () => {
    console.log("다음 단계로 이동");
    // 다음 단계로 이동하는 로직
  };

  return (
    <div className="JobMatch">
      <Header 
        withBack={true} 
        isLogin={true} 
        userName="name"
        onMenuClick={() => console.log("메뉴 클릭")}
        onBackClick={() => console.log("뒤로가기")}
        onUserClick={() => console.log("사용자 클릭")}
      />
      
      <div className="JobMatch_content">
        <div className="JobMatch_intro_section">
          <div className="JobMatch_text_group">
            <div className="JobMatch_title">추천 적합 직무 확인하기</div>
            <div className="JobMatch_intro">
              분석 결과, 당신에게 적합한 직무는 다음과 같습니다.<br />
              적합도를 확인하고 직무 선택에 참고해보세요.
            </div>
          </div>
          <div className="JobMatch_intro_button">
            <RoundButton
              text="계속하기"
              size="large"
              onClick={handleContinue}
            />
            <div className="JobMatch_step">3/5</div>
          </div>
        </div>
        
        <div className="JobMatch_slider_container">
          <button 
            className="JobMatch_slider_button JobMatch_slider_button_prev"
            onClick={prevSlide}
            disabled={totalSlides <= 1}
          >
            ‹
          </button>
          
          <div className="JobMatch_cards">
            {currentCards.map((job, index) => (
              <JobMatchCard
                key={currentSlide * cardsPerSlide + index}
                jobCategory={job.jobCategory}
                profileImage={job.profileImage}
                recommendationReason={job.recommendationReason}
                suitabilityScore={job.suitabilityScore}
                buttonText={job.buttonText}
                onButtonClick={job.onButtonClick}
              />
            ))}
          </div>
          
          <button 
            className="JobMatch_slider_button JobMatch_slider_button_next"
            onClick={nextSlide}
            disabled={totalSlides <= 1}
          >
            ›
          </button>
        </div>
        
        <div className="JobMatch_slider_dots">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`JobMatch_slider_dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      
      <footer className="JobMatch_footer">
        <div className="JobMatch_copyright">
          <span>2023 JOB. All rights reserved.</span>
          <div className="JobMatch_links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobMatch;
