// components/common/LabeledSelect.tsx
import "./styles/LabeledSelect.css";

type LabeledSelectProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
};

const LabeledSelect = ({ label, value, onChange, options }: LabeledSelectProps) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold mb-1">{label}</label>
    <select className="w-full border rounded p-2" value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
export default LabeledSelect;