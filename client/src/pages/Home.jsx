import Hero from "../components/sections/home/hero/Hero";
import Stats from "../components/sections/home/Stats";
import Services from "../components/sections/home/services/Services";
import WhyChoose from "../components/sections/home/whyChoose/WhyChoose";
import Portfolio from "../components/sections/home/portfolio/Portfolio";
const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
        <WhyChoose />
        <Portfolio />
    </>
  );
};

export default Home;