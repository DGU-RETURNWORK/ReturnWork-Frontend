import "./styles/RoundButton.css";

interface RoundButtonProps {
  text: string;
  status?: "active" | "inactive";
  size: "small" | "medium" | "large";
  type?: "default" | "delete";
  onClick?: () => void;
}

const RoundButton = ({
  text,
  status = "active",
  size="small",
  type = "default",
  onClick,
}: RoundButtonProps) => {
  return (
    <button
      className={`RoundButton RoundButton_${status} RoundButton_${size} ${type === "delete" ? "RoundButton_delete" : ""}`}
      onClick={onClick}
    >
      <span className="text">{text}</span>
    </button>
  );
};

export default RoundButton;
