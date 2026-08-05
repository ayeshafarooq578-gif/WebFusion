import { FaNodeJs } from "react-icons/fa";
import TechCard from "./TechCard";

const NodeIcon = () => {
  return (
    <TechCard
      icon={<FaNodeJs />}
      label="Node.js"
      className="top-8 right-4"
    />
  );
};

export default NodeIcon;