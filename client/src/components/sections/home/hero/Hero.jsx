import Container from "../../../ui/Container";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import BackgroundEffects from "./BackgroundEffects";

const Hero = () => {
  return (
    <section
    id="home"
    data-aos="fade-up"
     className="relative overflow-hidden pt-32 pb-24">

      <BackgroundEffects />

      {/* Increased container width */}
      <Container className="max-w-[1500px]">

        <div
  className="
    grid
    lg:grid-cols-2
    grid-cols-1
    items-center
    gap-16
    lg:gap-20
  "
>
  <HeroContent />

  <HeroVisual />
</div>

        

      </Container>

    </section>
  );
};

export default Hero;