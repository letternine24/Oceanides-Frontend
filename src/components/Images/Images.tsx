import "@styles/Components/Images.css";
import { IImages } from "@/interface/components/Images";

const Images: React.FC<IImages> = ({ name, additionalClass, style }) => {
  return (
    <img
      src={`/assets/images/${name}.png`}
      className={`images ${additionalClass ?? ""}`}
      style={style}
      alt={name}
    />
  );
};

export default Images;
