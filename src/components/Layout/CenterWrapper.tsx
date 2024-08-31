import { ICenterWrapper } from "@/interface/components/CenterWrapper";
import "./CenterWrapper.css";

const CenterWrapper: React.FC<ICenterWrapper> = ({ children }) => {
  return <div className="content-wrapper">{children}</div>;
};

export default CenterWrapper;
