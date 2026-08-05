import { FaReact } from "react-icons/fa";
import TechCard from "./TechCard";

const ReactIcon = () => {
  return (
    <TechCard
      icon={<FaReact />}
      label="React"
      className="top-8 left-0"
    />
  );
};

export default ReactIcon;