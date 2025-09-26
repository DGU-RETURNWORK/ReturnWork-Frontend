import { IoIosArrowDown } from "react-icons/io";
import AuthLeft from "../../../components/AuthLeft";
import CustomInput from "../../../components/CustomInput";
import styles from "./Step1.module.css";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
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
            <CustomInput size="medium" placeholder="년도" />
            <CustomInput
              size="small"
              placeholder="월"
              disabled={true}
              icon={<IoIosArrowDown size={18} />}
            />
            <CustomInput
              size="small"
              placeholder="일"
              disabled={true}
              icon={<IoIosArrowDown size={18} />}
            />
          </section>
          <section className="button">
            <Button
              text="계속하기"
              size="large"
              onClick={() => nav("/auth/signup/step2")}
            />
          </section>
        </section>
      </div>
    </div>
  );
};

export default Step1;
