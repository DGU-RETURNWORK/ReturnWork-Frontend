import type React from "react";
import "./styles/CustomInput.css";

interface CustomInputProps {
  size: "large" | "medium" | "small" | "auto";
  icon?: React.ReactNode;
  error?: string;
  placeholder?: string;
  onIconPress?: () => void;
}

export default function CustomInput({
  size,
  icon,
  error,
  placeholder,
  onIconPress,
}: CustomInputProps) {
  return (
    <div className={`input input-${size}`}>
      <input
        className={`input-field input-${size}`}
        placeholder={placeholder}
      />
      <div className="input-icon" onClick={onIconPress}>
        {icon}
      </div>
      <div className="input-error">
        {Boolean(error) && <text>{error}</text>}
      </div>
    </div>
  );
}
