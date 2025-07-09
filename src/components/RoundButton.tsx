import "./styles/RoundButton.css";

interface RoundButtonProps {
  text: string;
  status?: "active" | "inactive";
  size: "small" | "medium" | "large";
  onClick?: () => void;
}

const RoundButton = ({
  text,
  status = "active",
  size,
  onClick,
}: RoundButtonProps) => {
  return (
    <button
      className={`RoundButton RoundButton_${status} RoundButton_${size}`}
      onClick={onClick}
    >
      <span className="text">{text}</span>
    </button>
  );
};

export default RoundButton;
