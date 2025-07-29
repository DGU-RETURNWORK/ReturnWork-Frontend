// components/common/LabeledTextarea.tsx
import "./LabeledTextarea.css";

type LabeledTextareaProps = {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
};

const LabeledTextarea = ({ label, value, onChange, placeholder }: LabeledTextareaProps) => {
    return (
        <div className="textarea-container">
            <label className="textarea-label">{label}</label>
            <textarea
                className="textarea-box"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={4}
            />
        </div>
    );
};

export default LabeledTextarea;