import { useEffect, useState } from "react";
import "./QuestionListInput.css";

type QuestionItem = {
    question: string;
    charLimit: number;
};

type QuestionListInputProps = {
    count: number;
    onChange: (questions: QuestionItem[]) => void;
};

const QuestionListInput = ({ count, onChange }: QuestionListInputProps) => {
    const [values, setValues] = useState<string[]>(() => Array(count).fill(""));
    const [charLimits, setCharLimits] = useState<number[]>(() => Array(count).fill(0));
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [charCountInput, setCharCountInput] = useState("");

    // count 변경 시 배열 초기화
    useEffect(() => {
        setValues((prev) =>
            Array(count)
                .fill("")
                .map((_, i) => prev[i] || "")
        );

        setCharLimits((prev) =>
            Array(count)
                .fill(0)
                .map((_, i) => prev[i] || 0)
        );
    }, [count]);

    // values 또는 charLimits가 바뀔 때 상위에 전달
    useEffect(() => {
        emitChange(values, charLimits);
    }, [values, charLimits]);

    const emitChange = (qs: string[], limits: number[]) => {
        const merged: QuestionItem[] = qs.map((q, i) => ({
            question: q,
            charLimit: limits[i] || 0,
        }));
        onChange(merged);
    };

    const handleChange = (index: number, value: string) => {
        const updated = [...values];
        updated[index] = value;
        setValues(updated);
    };

    const handleLimitChange = (value: string) => {
        if (!/^\d*$/.test(value)) return;
        setCharCountInput(value);

        const updated = [...charLimits];
        updated[selectedIndex] = Number(value);
        setCharLimits(updated);
    };

    const handleConfirm = () => {
        const length = values[selectedIndex].length;
        const limit = charLimits[selectedIndex];

        if (limit > 0 && length > limit) {
            alert(`${selectedIndex + 1}번 문항: 제한 ${limit}자 → 초과`);
        } else {
            alert(`${selectedIndex + 1}번 문항: 제한 ${limit || "없음"}자`);
        }
    };
    const handleConsoleLog = () => {
        const result: QuestionItem[] = values.map((q, i) => ({
            question: q,
            charLimit: charLimits[i] || 0,
        }));
        console.log("저장할 자기소개서 문항:", result);

        const msg = result
            .map(
                (q, i) =>
                    `${i + 1}번 문항:\n${q.question || "(내용 없음)"}\n(제한 ${q.charLimit || "없음"}자)`
            )
            .join("\n\n");
        alert(msg);
    };

    return (
        <div className="question-list-wrapper">
            <label className="question-label">자기소개서 문항</label>

            {values.map((q, i) => (
                <textarea
                    key={i}
                    value={q}
                    onChange={(e) => handleChange(i, e.target.value)}
                    placeholder={`${i + 1}.`}
                    className="question-box"
                    rows={2}
                />
            ))}

            <div className="question-footer">
                <select
                    className="question-dropdown"
                    value={selectedIndex}
                    onChange={(e) => {
                        const newIndex = Number(e.target.value);
                        setSelectedIndex(newIndex);
                        setCharCountInput(charLimits[newIndex]?.toString() || "");
                    }}
                >
                    {values.map((_, i) => (
                        <option key={i} value={i}>
                            {i + 1}번 문항
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    className="char-count-display"
                    placeholder="글자수"
                    value={charCountInput}
                    onChange={(e) => handleLimitChange(e.target.value)}
                />

                <button className="confirm-button" onClick={handleConfirm}>
                    확인
                </button>

                <button className="confirm-button" onClick={handleConsoleLog}>
                    문항 저장 확인
                </button>
            </div>
        </div>
    );
};

export default QuestionListInput;