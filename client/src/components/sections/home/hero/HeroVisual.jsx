import GlowLayer from "./GlowLayer";

import Laptop from "./Laptop";

import ReactIcon from "./TechIcons/ReactIcon";
import NodeIcon from "./TechIcons/NodeIcon";
import MongoIcon from "./TechIcons/MongoIcon";
import TailwindIcon from "./TechIcons/TailwindIcon";

const HeroVisual = () => {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
        h-[420px]
        sm:h-[500px]
        md:h-[600px]
        lg:h-[680px]
        xl:h-[760px]
      "
    >
      <GlowLayer />

      {/* Laptop */}
      <div
  className="
    relative
    z-20
    w-full
    flex
    justify-center
    lg:-translate-x-8
    xl:-translate-x-12
  "
>
  <Laptop />
</div>

      {/* React */}
      <div className="absolute top-10 left-10 scale-75 sm:scale-90 lg:scale-100">
  <ReactIcon />
</div>

<div className="absolute top-10 right-10 scale-75 sm:scale-90 lg:scale-100">
  <NodeIcon />
</div>

<div className="absolute bottom-20 left-10 scale-75 sm:scale-90 lg:scale-100">
  <MongoIcon />
</div>

<div className="absolute bottom-10 right-10 scale-75 sm:scale-90 lg:scale-100">
  <TailwindIcon />
</div>
    </div>
  );
};

export default HeroVisual;