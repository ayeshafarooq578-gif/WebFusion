import GlowLayer from "./GlowLayer";
import LightTrails from "./LightTrails";
import FloatingParticles from "./FloatingParticles";

import Laptop from "./Laptop";

import ReactIcon from "./TechIcons/ReactIcon";
import NodeIcon from "./TechIcons/NodeIcon";
import MongoIcon from "./TechIcons/MongoIcon";
import TailwindIcon from "./TechIcons/TailwindIcon";

const HeroVisual = () => {
  return (
    <div className="relative h-[780px] flex items-center justify-center">

      <GlowLayer />

     <LightTrails />

<FloatingParticles />


      {/* Laptop */}
     <div className="relative z-20 scale-[1.35] lg:translate-x-15 animate-float-slow">
    <Laptop />
</div>

      {/* React */}
      <div className="absolute top-10 left-2 z-30 animate-float-fast">
        <ReactIcon />
      </div>

      {/* Node */}
      <div className="absolute top-8 right-2 z-30 animate-float-medium">
        <NodeIcon />
      </div>

      {/* Mongo */}
      <div className="absolute bottom-24 left-8 z-30 animate-float-fast">
        <MongoIcon />
      </div>

      {/* Tailwind */}
      <div className="absolute bottom-8 right-6 z-30 animate-float-medium">
        <TailwindIcon />
      </div>

    </div>
  );
};

export default HeroVisual;