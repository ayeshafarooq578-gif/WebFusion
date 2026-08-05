import Container from "../../../ui/Container";
import SectionHeading from "./SectionHeading";
import PortfolioCard from "./PortfolioCard";

import lms from "../../../../assets/images/portfolio/premium-lms.png";
import portfolio from "../../../../assets/images/portfolio/student-portfolio-builder.png";
import ecommerce from "../../../../assets/images/portfolio/ecommerce-electronic.png";

const projects = [
  {
    image: lms,
    title: "Premium LMS",
    description:
      "A modern Learning Management System with secure authentication, premium courses, payment integration and an intuitive dashboard.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
  },

  {
    image: portfolio,
    title: "Student Portfolio Builder",
    description:
      "A responsive portfolio builder allowing students to showcase their skills, projects, education and achievements professionally.",
    tech: ["React", "Express", "MongoDB"],
  },

 {
  image: ecommerce,
  title: "Electronics E-Commerce",
  description:
    "A modern online electronics store featuring a clean shopping experience, product categories, advanced search, secure checkout, and responsive design for seamless browsing across all devices.",
  tech: ["React", "Node.js", "MongoDB", "Express"],
},
];

const Portfolio = () => {
  return (
    <section
  id="portfolio"
  data-aos="zoom-in-up"
  className="py-20 lg:py-28"
>
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
>
          {projects.map((project, index) => (
  <div
    key={index}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <PortfolioCard {...project} />
  </div>
))}

        </div>

      </Container>
    </section>
  );
};

export default Portfolio;