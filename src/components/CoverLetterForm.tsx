import { useState } from "react";
import LabeledSelect from "./LabeledSelect";
import LabeledTextarea from "./LabeledTextarea";
import QuestionListInput from "./QuestionListInput";

type QuestionItem = {
    question: string;
    charLimit: number;
};

const CoverLetterForm = () => {
    const [job, setJob] = useState("");
    const [capability, setCapability] = useState("");
    const [career, setCareer] = useState("");
    const [questionCount, setQuestionCount] = useState(1); //자기소개서 문항 수 디폴트
    const [questions, setQuestions] = useState<QuestionItem[]>(
        Array(3).fill({ question: "", charLimit: 0 })
    );

    // 문항 개수 변경 시 상태 초기화
    const handleQuestionCountChange = (count: number) => {
        setQuestionCount(count);
        setQuestions(Array(count).fill({ question: "", charLimit: 0 }));
    };

    

    return (
        <div>
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

            <QuestionListInput
                count={questionCount}
                onChange={setQuestions}
            />
        </div>
    );
};

export default CoverLetterForm;