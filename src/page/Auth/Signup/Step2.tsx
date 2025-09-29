import { useState } from "react";
import AuthLeft from "../../../components/AuthLeft";
import { useNavigate } from "react-router-dom";
import styles from "./Step2.module.css";
import Button from "../../../components/Button";

const termsData = [
  {
    id: 1,
    title: "개인정보수집 동의",
    content:
      "개인정보수집 동의내용개인정보수집 동의내용개인정보수집 동의내용개인정보수집 동의내용개인정보수집 동의내용개인정보수집 동의내용개인정보수집 동의내용개인정보수집 동의내용개인정보수집 동의내용",
    required: true,
  },
  { id: 2, title: "서비스 이용약관 동의", content: "", required: true },
  { id: 3, title: "마케팅 활용 동의", content: "", required: false },
];

const Step2 = () => {
  const nav = useNavigate();

  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleCheck = (id: number) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const allChecked: boolean = termsData
    .filter((term) => term.required)
    .every((term) => checkedItems[term.id]);

  return (
    <div className="container">
      <div className="left">
        <AuthLeft />
      </div>
      <div className="right">
        <section className="login">
          <section className={styles.termsContainer}>
            <h2>회원가입 하기</h2>
            <div className={styles.termsContent}>
              {termsData.map((term) => (
                <div key={term.id} className={styles.termItem}>
                  <div className={styles.termText}>
                    <span className={styles.termTitle}>{term.title}</span>
                    <span className={styles.termContent}>{term.content}</span>
                  </div>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedItems[term.id]}
                      onChange={() => handleCheck(term.id)}
                    />
                    동의함
                  </label>
                </div>
              ))}

              <div className={styles.button}>
                <Button
                  text="회원가입 하기"
                  size="large"
                  disabled={!allChecked}
                  onClick={() => nav("/")}
                />
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Step2;
