import { IoIosArrowDown } from "react-icons/io";

export default function MonthInput() {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div className="input-wrapper input-small">
      <div className="input-container">
        <select className="input-select input-large">
          <option value="">월</option>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <div className="input-icon">
          <IoIosArrowDown size={18} />
        </div>
      </div>
    </div>
  );
}
