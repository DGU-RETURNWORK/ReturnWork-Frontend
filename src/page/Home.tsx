import Header from "../components/Header";
import "./Home.css";
import heroImg from "../assets/images/hero.png";
import ReturnWorkService from "../components/ReturnWorkService";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  const onLoginClick = () => {
    nav("/auth/login");
  };
  const onSignUpClick = () => {
    nav("/auth/signup");
  };

  return (
    <div className="background">
      <div className="header">
        <Header
          isLogin={false}
          withBack={false}
          onLoginClick={onLoginClick}
          onSignUpClick={onSignUpClick}
        />
        <div className="hero">
          <div className="heroText">
            <h4>리턴워크</h4>
            <h1>산업재해 후, 새로운 시작을 위한 동반자</h1>
            <p>
              리턴워크는 맞춤형 직무 추천, 훈련 경로를 통해 여러분의 성공적인
              사회 복귀를 지원합니다.
            </p>
          </div>
          <div className="heroImage">
            <img src={heroImg} alt="Hero" />
          </div>
        </div>
      </div>
      <ReturnWorkService />
      <Footer />
    </div>
  );
};

export default Home;
