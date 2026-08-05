import Badge from "../../../ui/Badge";
import Button from "../../../ui/Button";

const HeroContent = () => {
    return (
        <div className="
  text-center
  lg:text-left
">
            
            <Badge>WE BUILD DIGITAL SOLUTIONS</Badge>

            <h1
            className="
font-bold
leading-tight
text-5xl
sm:text-6xl
lg:text-7xl
"
            style={{ fontFamily: "Sora" }}>
                Building Modern
                <br/>
                Websites That
                <br/>
                <span className="text-violet-500">
                    Grow Your Business.
                </span>
            </h1>

            <p className="mt-8 text-slate-400 text-lg leading-8">
                We create beautiful, high erformance websites
                and web applications that help businesses
                attract more customers and grow online.
            </p>


           <div className="
flex
flex-col
sm:flex-row
justify-center
lg:justify-start
gap-5
">
                <Button>
                    Get Started
                </Button>

                <Button varient="outline">
                View Portfolio
                </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-slate-300">
                 <div>
          ✔ MERN Stack
        </div>

        <div>
          ✔ Responsive Design
        </div>

        <div>
          ✔ SEO Optimized
        </div>

            </div>

        </div>
    );
};

export default HeroContent;