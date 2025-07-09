import "./styles/Button.css";
import { IoPersonCircleOutline } from "react-icons/io5";

interface ButtonProps {
  text: string;
  status?: "active" | "inactive";
  size?: "small" | "medium";
  icon?: boolean;
  onClick?: () => void;
}

const Button = ({
  text,
  status = "active",
  size = "medium",
  icon = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`Button Button_${status} Button_${size}`}
      onClick={onClick}
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
