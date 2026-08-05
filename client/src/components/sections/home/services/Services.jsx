import Container from "../../../ui/Container";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

import {
  Monitor,
  Code2,
  Palette,
  Cloud,
  Wrench,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description:
      "Modern, responsive and high-performance business websites built with the latest technologies.",
  },
  {
    icon: Code2,
    title: "MERN Stack Development",
    description:
      "Full-stack web applications using MongoDB, Express.js, React and Node.js.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Beautiful user interfaces designed for better engagement and user experience.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Deploy your applications securely on Vercel, AWS, Render and other cloud platforms.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Keep your website updated, secure, optimized and running smoothly.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect websites optimized for desktops, tablets and mobile devices.",
  },
];

const Services = () => {
  return (
    <section 
    id="services"
     data-aos="fade-up"
     className="py-20 lg:py-28">

      <Container>

        <SectionHeading />

<div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-3
    gap-6
    lg:gap-8
  "
>          {services.map((service, index) => (
  <div
    key={index}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <ServiceCard {...service} />
  </div>
))}
        </div>

      </Container>

    </section>
  );
};

export default Services;