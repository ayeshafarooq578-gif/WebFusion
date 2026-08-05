import Container from "../../../ui/Container";
import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeaturedCard";

import {
  Zap,
  ShieldCheck,
  Smartphone,
  Palette,
  Cloud,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Lightning-fast websites optimized for speed, SEO and user experience.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Solutions",
    description:
      "Modern security practices that keep your business and users protected.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description:
      "Your website will look amazing on desktop, tablet and mobile devices.",
  },
  {
    icon: Palette,
    title: "Modern UI Design",
    description:
      "Clean, premium and user-friendly interfaces that impress visitors.",
  },
  {
    icon: Cloud,
    title: "Cloud Ready",
    description:
      "Deploy effortlessly on Vercel, AWS, Render and other cloud platforms.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "We're here whenever you need updates, fixes or technical guidance.",
  },
];

const WhyChoose = () => {
  return (
    <section 
    id="why-choose"
     data-aos="fade-up"
     className="py-28">

      <Container>

        <SectionHeading />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default WhyChoose;