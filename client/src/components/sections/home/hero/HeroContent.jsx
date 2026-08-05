import Badge from "../../../ui/Badge";
import Button from "../../../ui/Button";

const HeroContent = () => {
  return (
    <div
      className="
        text-center
        lg:text-left
        max-w-2xl
        mx-auto
        lg:mx-0
      "
    >
      <Badge>WE BUILD DIGITAL SOLUTIONS</Badge>

      <h1
        className="
          mt-6
          font-bold
          leading-tight
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
        style={{ fontFamily: "Sora" }}
      >
        Building Modern
        <br />
        Websites That
        <br />
        <span className="text-violet-500">
          Grow Your Business.
        </span>
      </h1>

      <p
        className="
          mt-8
          text-slate-400
          text-base
          sm:text-lg
          leading-8
          max-w-xl
          mx-auto
          lg:mx-0
        "
      >
        We create beautiful, high-performance websites and web
        applications that help businesses attract more customers
        and grow online.
      </p>

      {/* Buttons */}

      <div
        className="
          mt-10
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          lg:justify-start
          gap-5
        "
      >
        <Button>
          Get Started
        </Button>

        <Button varient="outline">
          View Portfolio
        </Button>
      </div>

      {/* Features */}

      <div
        className="
          mt-10
          flex
          flex-wrap
          justify-center
          lg:justify-start
          gap-4
          sm:gap-8
          text-slate-300
          text-sm
          sm:text-base
        "
      >
        <div>✔ MERN Stack</div>

        <div>✔ Responsive Design</div>

        <div>✔ SEO Optimized</div>
      </div>
    </div>
  );
};

export default HeroContent;