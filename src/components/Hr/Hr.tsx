import "@styles/Components/Hr.css";
import { IHr } from "@/interface/components/Hr";

const Hr: React.FC<IHr> = ({ width, color }) => {
  return <div className="hr" style={{ width: width, borderColor: color }} />;
};

export default Hr;
