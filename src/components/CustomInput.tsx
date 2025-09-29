import type React from "react";
import "./styles/CustomInput.css";

interface CustomInputProps {
  size: "large" | "medium" | "small" | "auto";
  icon?: React.ReactNode;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  onIconPress?: () => void;
}

export default function CustomInput({
  size,
  icon,
  error,
  placeholder,
  disabled,
  onIconPress,
}: CustomInputProps) {
  return (
    <div className={`input input-${size}`}>
      <input
        className={`input-field input-${size}`}
        placeholder={placeholder}
        disabled={disabled}
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
