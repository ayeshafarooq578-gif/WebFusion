import { SiTailwindcss } from "react-icons/si";
import TechCard from "./TechCard";

const TailwindIcon = () => {
  return (
    <TechCard
      icon={<SiTailwindcss />}
      label="Tailwind"
      className="bottom-8 right-0"
    />
  );
};

export default TailwindIcon;