import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 group"
    >
      <img
        src={logo}
        alt="WebFusion Logo"
        className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
      />

      <div className="hidden sm:block">
        <h1
          className="text-xl font-bold text-white"
          style={{ fontFamily: "Sora" }}
        >
          WebFusion
        </h1>

        <p className="text-xs tracking-[3px] uppercase text-slate-400">
          Web Development Agency
        </p>
      </div>
    </Link>
  );
};

export default Logo;