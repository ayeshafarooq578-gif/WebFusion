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
          scale-[0.72]
          sm:scale-[0.82]
          md:scale-[0.95]
          lg:scale-[1.10]
          xl:scale-[1.28]
          2xl:scale-[1.35]
          lg:-translate-x-8
          xl:-translate-x-12
        "
      >
        <Laptop />
      </div>

      {/* React */}
      <div
        className="
          absolute
          top-2
          left-2
          sm:top-6
          sm:left-6
          md:top-10
          md:left-10
          z-30
        "
      >
        <ReactIcon />
      </div>

      {/* Node */}
      <div
        className="
          absolute
          top-4
          right-2
          sm:top-8
          sm:right-6
          md:top-10
          md:right-8
          z-30
        "
      >
        <NodeIcon />
      </div>

      {/* Mongo */}
      <div
        className="
          absolute
          bottom-12
          left-4
          sm:bottom-20
          sm:left-8
          md:bottom-24
          md:left-12
          z-30
        "
      >
        <MongoIcon />
      </div>

      {/* Tailwind */}
      <div
        className="
          absolute
          bottom-4
          right-2
          sm:bottom-8
          sm:right-6
          md:bottom-10
          md:right-10
          z-30
        "
      >
        <TailwindIcon />
      </div>
    </div>
  );
};

export default HeroVisual;