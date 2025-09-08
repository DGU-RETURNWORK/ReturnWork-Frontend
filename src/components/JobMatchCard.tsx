import "./styles/JobMatchCard.css";

interface JobMatchCardProps {
  jobCategory: string;
  profileImage: string;
  recommendationReason: string;
  suitabilityScore: number;
  buttonText: string;
  onButtonClick: () => void;
}

const JobMatchCard = ({
  jobCategory,
  profileImage,
  recommendationReason,
  suitabilityScore,
  buttonText,
  onButtonClick
}: JobMatchCardProps) => {
  return (
    <div className="JobMatchCard">
      <div className="JobMatchCard_category">{jobCategory}</div>
      
      <div className="JobMatchCard_profile">
        <img 
          src={profileImage} 
          alt="Profile" 
          className="JobMatchCard_profile_image"
        />
      </div>
      
      <div className="JobMatchCard_reason">
        {recommendationReason}
      </div>
      
      <div className="JobMatchCard_suitability">
        <span className="JobMatchCard_suitability_dot"></span>
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
