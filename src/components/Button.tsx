import "./styles/Button.css";
import { IoPersonCircleOutline } from "react-icons/io5";

interface ButtonProps {
  text: string;
  status?: "active" | "inactive";
  size?: "small" | "medium" | "large";
  icon?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  text,
  status = "active",
  size = "medium",
  icon = false,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`Button Button_${status} Button_${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <span className="icon">
          <IoPersonCircleOutline />
        </span>
      )}
      <span className="text">{text}</span>
    </button>
  );
};

export default Button;
