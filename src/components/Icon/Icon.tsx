import { IIcon } from "@/interface/components/Icon";
import "@styles/Components/Icon.css";

const Icon: React.FC<IIcon> = ({ name, size }) => {
  return (
    <img
      src={`/assets/icons/${name}.png`}
      className={`icon ${size ? `icon-${size}` : ""}`}
      alt={name}
    />
  );
};

export default Icon;
