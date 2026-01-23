import { Link, useNavigate } from "react-router-dom";
import AuthLeft from "../../../components/AuthLeft";
import Button from "../../../components/Button";
import EmailInput from "../../../components/Input/EmailInput";
import NameInput from "../../../components/Input/NameInput";
import PasswordInput from "../../../components/Input/PasswordInput";
import PasswordConfirmInput from "../../../components/Input/PasswordConfrimInput";
import { useFormContext } from "react-hook-form";
import CarrerInput from "../../../components/Input/CarrerInput";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const Step1 = () => {
  const nav = useNavigate();
  const methods = useFormContext<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("폼 데이터:", data);
    nav("/auth/signup/step2");
  };

  return (
    <div className="container">
      <div className="left">
        <AuthLeft />
      </div>
      <div className="right">
        <section className="login">
          <text className="title">회원가입 하기</text>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <section className="input">
              <NameInput />
              <EmailInput />
              <PasswordInput />
              <PasswordConfirmInput />
              <CarrerInput />
            </section>

            <section className="button">
              <Button text="계속하기" size="large" type="submit" />
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
          </form>
        </section>
      </div>
    </div>
  );
};

export default Step1;
