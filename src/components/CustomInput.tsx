import type React from "react";
import "./styles/CustomInput.css";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize: "large" | "medium" | "small" | "auto";
  icon?: React.ReactNode;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  onIconPress?: () => void;
}

export default function CustomInput({
  size,
  icon,
  error,
  placeholder,
  disabled,
  type,
  onIconPress,
  ...rest
}: CustomInputProps) {
  return (
    <div className={`input-wrapper input-${size}`}>
      <div className={`input-container ${error ? "has-error" : ""}`}>
        <input
          className={`input-field input-${size}`}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          {...rest}
        />
        {icon && (
          <div className="input-icon" onClick={onIconPress}>
            {icon}
          </div>
        )}
      </div>
      {Boolean(error) && <div className="input-error">{error}</div>}
    </div>
  );
}
