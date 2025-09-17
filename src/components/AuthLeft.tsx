import "./styles/AuthLeft.css";
import leftImage from "../assets/images/hero.png";

const AuthLeft = () => {
  return (
    <div>
      <div className="left_logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="authLeft">
        <div className="left_text">
          <p className="left_text_title">RETURNWORK</p>
          <p className="left_text_content">
            새로운 시작을 위한 동반자, 리턴워크가 당신의 꿈을 응원합니다.
          </p>
        </div>
        <div className="left_image">
          <img src={leftImage} alt="leftImage" />
        </div>
      </div>
    </div>
  );
};

export default AuthLeft;
