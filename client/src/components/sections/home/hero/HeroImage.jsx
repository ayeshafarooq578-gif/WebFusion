import GlowEffect from "./GlowLayer";
import Laptop from "./Laptop";
import TechBadge from "./TechBadge";
import PerformanceCard from "./TechIcons/PerformanceCard";

import reactLogo from "../../../../assets/images/hero/react.png";
import nodeLogo from "../../../../assets/images/hero/node.png";
import mongoLogo from "../../../../assets/images/hero/mongodb.png";
import tailwindLogo from "../../../../assets/images/hero/tailwind.png";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center h-[700px]">

      <GlowEffect />

      <Laptop />

      <TechBadge
        image={reactLogo}
        name="React"
        className="top-10 left-0"
      />

      <TechBadge
        image={nodeLogo}
        name="Node.js"
        className="top-48 right-0"
      />

      <TechBadge
        image={mongoLogo}
        name="MongoDB"
        className="bottom-44 left-4"
      />

      <TechBadge
        image={tailwindLogo}
        name="Tailwind"
        className="bottom-16 right-8"
      />

      <PerformanceCard />

    </div>
  );
};

export default HeroImage;