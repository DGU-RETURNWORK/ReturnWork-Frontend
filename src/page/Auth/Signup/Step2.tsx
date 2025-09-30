import AuthLeft from "../../../components/AuthLeft";
import CustomInput from "../../../components/CustomInput";
import styles from "./Step2.module.css";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import MonthInput from "../../../components/Input/MonthInput";
import DayInput from "../../../components/Input/DayInput";

const Step2 = () => {
  const nav = useNavigate();

  return (
    <div className="container">
      <div className="left">
        <AuthLeft />
      </div>
      <div className="right">
        <section className="login">
          <text className="title">회원가입 하기</text>
          <section className={styles.input}>
            <CustomInput inputSize="medium" placeholder="년도" />
            <MonthInput />
            <DayInput />
          </section>
          <section className="button">
            <Button
              text="계속하기"
              size="large"
              onClick={() => nav("/auth/signup/step3")}
            />
          </section>
        </section>
      </div>
    </div>
  );
};

export default Step2;
