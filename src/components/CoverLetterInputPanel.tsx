// src/pages/CoverLetterInputPanel.tsx
import "./styles/CoverLetterInputPanel.css";
import CoverLetterForm from "../components/CoverLetterForm";
import RoundButton from "../components/RoundButton";


const CoverLetterInputPanel = () => {
    return (
        <div className="p-6">
            <CoverLetterForm />
            <RoundButton text="재설정" size="small"  />
            <RoundButton text="자기소개서 생성하기" size="medium" />
        </div>
    );
};

export default CoverLetterInputPanel;