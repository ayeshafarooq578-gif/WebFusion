import Container from "../../../ui/Container";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import BackgroundEffects from "./BackgroundEffects";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">

      <BackgroundEffects />

      <Container>
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            gap-12
            lg:gap-16
            xl:gap-20
          "
        >
          {/* Text */}
          <HeroContent />

          {/* Laptop */}
          <HeroVisual />
        </div>
      </Container>

    </section>
  );
};

export default Hero;