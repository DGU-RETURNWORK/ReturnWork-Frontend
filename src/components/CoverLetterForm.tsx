import { useState } from "react";
import styled from "styled-components";
import LabeledSelect from "./Resume/LabeledSelect";
import LabeledTextarea from "./Resume/LabeledTextarea";
import QuestionListInput from "./Resume/QuestionListInput";
import RoundButton from "./RoundButton";

type QuestionItem = {
    question: string;
    charLimit: number;
};

const CoverLetterForm = () => {
    const [job, setJob] = useState("");
    const [capability, setCapability] = useState("");
    const [career, setCareer] = useState("");
    const [questionCount, setQuestionCount] = useState(1);
    const [questions, setQuestions] = useState<QuestionItem[]>(
        Array(3).fill({ question: "", charLimit: 0 })
    );

    const handleQuestionCountChange = (count: number) => {
        setQuestionCount(count);
        setQuestions(Array(count).fill({ question: "", charLimit: 0 }));
    };

    const handleReset = () => {
        setJob("");
        setCapability("");
        setCareer("");
        setQuestionCount(1);
        setQuestions(Array(3).fill({ question: "", charLimit: 0 }));
    };

    const handleGenerate = () => {
        console.log("자기소개서 생성 요청:", {
            job,
            capability,
            career,
            questions,
        });
        alert("자기소개서가 생성되었습니다!");
    };

    return (
        <FormWrapper>
            <LabeledSelect
                label="직무 선택"
                value={job}
                onChange={setJob}
                options={["사무행정", "디자인", "생산관리"]}
            />
            <LabeledSelect
                label="강조할 역량"
                value={capability}
                onChange={setCapability}
                options={["책임감", "협업능력", "문서처리"]}
            />
            <LabeledTextarea
                label="경력 요약"
                value={career}
                onChange={setCareer}
                placeholder="예) 3년간 인사 업무를 담당했습니다."
            />
            <LabeledSelect
                label="자기소개서 문항 개수"
                value={String(questionCount)}
                onChange={(v) => handleQuestionCountChange(Number(v))}
                options={["1", "2", "3", "4", "5"]}
            />
            <QuestionListInput count={questionCount} onChange={setQuestions} />

            <ButtonRow>
                <RoundButton text="재설정" size="small" onClick={handleReset} />
                <RoundButton text="자기소개서 생성하기" size="medium" onClick={handleGenerate} />
            </ButtonRow>
        </FormWrapper>
    );
};

export default CoverLetterForm;

const FormWrapper = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    max-width: 600px;
    width: 100%;
    margin: 0 auto;

    /* 공통 입력 요소 스타일 통일 */
    select,
    textarea,
    input {
        
    box-sizing: border-box;
    padding: 12px 16px;
    font-size: 14px;
    border: 1px solid #D1D5DB;
    border-radius: 8px;
    background-color: #fff;
    color: #111;
    }

    textarea::placeholder {
    font-size: 14px;
    color: #aaa;
    }
`;

const ButtonRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;                 // 버튼 사이 간격
    margin-top: 24px;
`;