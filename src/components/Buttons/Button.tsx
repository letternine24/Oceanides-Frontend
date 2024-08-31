import "./Button.css";
import { IButton } from "@/interface/components/Button";

const Button: React.FC<IButton> = ({
  label,
  onClick,
  className,
  style,
  disabled,
}) => {
  return (
    <button
      className={`button ${className}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
