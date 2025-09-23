import { Link, useNavigate } from "react-router-dom";
import AuthLeft from "../../../components/AuthLeft";
import Button from "../../../components/Button";
import CustomInput from "../../../components/CustomInput";
import { RiCheckFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import "./index.css";

const Signup = () => {
  const nav = useNavigate();

  return (
    <div className="container">
      <div className="left">
        <AuthLeft />
      </div>
      <div className="right">
        <section className="login">
          <text className="title">회원가입 하기</text>
          <section className="input">
            <CustomInput
              size="large"
              placeholder="지역을 선택해주세요."
              disabled={true}
              icon={<IoIosArrowDown size={18} />}
            />
            <CustomInput size="large" placeholder="이름을 입력하세요." />
            <CustomInput
              size="large"
              placeholder="이메일을 입력하세요."
              icon={<RiCheckFill size={18} />}
            />
            <CustomInput
              size="large"
              placeholder="비밀번호를 입력하세요."
              icon={<RiCheckFill size={18} />}
            />
            <CustomInput
              size="large"
              placeholder="비밀번호를 다시 입력하세요."
              icon={<RiCheckFill size={18} />}
            />
          </section>
          <section className="button">
            <Button
              text="계속하기"
              size="large"
              onClick={() => nav("/auth/signup/step1")}
            />
            <div className="divider">
              <span className="line"></span>
              <span className="divider_text">다른 계정으로 회원가입</span>
              <span className="line"></span>
            </div>
            <div className="signup">
              <span>이미 계정이 있으신가요? </span>
              <Link to="/auth/login" className="link">
                회원가입 하기
              </Link>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Signup;
