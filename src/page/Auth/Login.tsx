import { Link } from "react-router-dom";
import AuthLeft from "../../components/AuthLeft";
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="left">
        <AuthLeft />
      </div>
      <div className="right">
        <section className="login">
          <text className="title">로그인 하기</text>
          <section className="input">
            <CustomInput size="large" placeholder="이메일을 입력하세요." />
            <CustomInput size="large" placeholder="비밀번호를 입력하세요." />
          </section>
          <section className="button">
            <Button text="로그인" size="large" />
            <div className="divider">
              <span className="line"></span>
              <span className="divider_text">다른 계정으로 로그인</span>
              <span className="line"></span>
            </div>
            <div className="signup">
              <span>계정이 없으신가요? </span>
              <Link to="/auth/signup" className="link">
                회원가입 하기
              </Link>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Login;
