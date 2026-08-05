import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 md:gap-3 shrink-0"
    >
      <img
        src={logo}
        alt="WebFusion Logo"
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />

      <div className="leading-tight">
        <h1
          className="text-lg md:text-2xl font-bold text-white whitespace-nowrap"
          style={{ fontFamily: "Sora" }}
        >
          WebFusion
        </h1>

        <p className="text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] uppercase text-slate-400 whitespace-nowrap">
          Web Development Agency
        </p>
      </div>
    </Link>
  );
};

export default Logo;