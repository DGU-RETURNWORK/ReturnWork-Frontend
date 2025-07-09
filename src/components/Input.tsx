import "./styles/Input.css";

const REGIONS = [
  "서울시",
  "인천시",
  "부산시",
  "대구시",
  "광주시",
  "대전시",
  "울산시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주도",
];

interface InputProps {
  placeholder: string;
  type?: "basic" | "password" | "region" | "email" | "tel";
  status?: "default" | "success" | "fail";
  value?: string;
  errorMessage?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void; // 유효성검사
}

const Input = ({
  placeholder,
  type = "basic",
  status = "default",
  value,
  errorMessage,
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <div className="input_wrapper">
      {type === "region" ? (
        <select
          className={`input input_${type}`}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        >
          <option value="" disabled>
            지역을 선택하세요.
          </option>
          {REGIONS.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={`input input_${type}`}
          type={type === "password" ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onBlur={onBlur}
        />
      )}
      <div className="icon">
        {status === "success" && <span className="icon_success">✓</span>}
        {status === "fail" && <span className="icon_fail">x</span>}
      </div>
      {status === "fail" && errorMessage && (
        <div className="error_message">
          <span className="error_icon">!</span>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
