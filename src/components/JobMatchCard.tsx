import { useState } from "react";
import "./styles/JobMatchCard.css";

interface JobMatchCardProps {
  jobCategory: string;
  profileImage: string;
  recommendationReason: string;
  suitabilityScore: number;
  buttonText: string;
  onButtonClick: () => void;
}

const getSuitabilityColor = (score: number) => {
  if (score >= 80) return "#4caf50"; // 초록
  if (score >= 60) return "#ff9800"; // 노랑
  return "#f44336"; // 빨강
};

const JobMatchCard = ({
  jobCategory,
  profileImage,
  recommendationReason,
  suitabilityScore,
  buttonText,
  onButtonClick
}: JobMatchCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="JobMatchCard">
      <div className="JobMatchCard_category">{jobCategory}</div>
      
      <div className="JobMatchCard_profile">
        <img 
          src={imageError ? "https://via.placeholder.com/150x150/6c757d/ffffff?text=Profile" : profileImage}
          alt="Profile" 
          className="JobMatchCard_profile_image"
          onError={handleImageError}
          onLoad={() => setImageError(false)}
        />
      </div>
      
      <div className="JobMatchCard_reason">
        <div className="JobMatchCard_reason_title">추천 사유</div>
        {recommendationReason}
      </div>
      
      <div className="JobMatchCard_suitability">
        <span 
          className="JobMatchCard_suitability_dot"
          style={{ backgroundColor: getSuitabilityColor(suitabilityScore) }}
        ></span>
        <span className="JobMatchCard_suitability_label">적합도</span>
        <span className="JobMatchCard_suitability_score">{suitabilityScore}%</span>
      </div>
      
      <button 
        className="JobMatchCard_button"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default JobMatchCard;
