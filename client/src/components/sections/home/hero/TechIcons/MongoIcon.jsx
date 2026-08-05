import { SiMongodb } from "react-icons/si";
import TechCard from "./TechCard";

const MongoIcon = () => {
  return (
    <TechCard
      icon={<SiMongodb />}
      label="MongoDB"
      className="bottom-24 left-8"
    />
  );
};

export default MongoIcon;