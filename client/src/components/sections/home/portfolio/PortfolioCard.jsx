import { ArrowUpRight } from "lucide-react";

const PortfolioCard = ({
  image,
  title,
  description,
  tech,
}) => {
  return (
    <div
  className="
    group
    overflow-hidden
    rounded-3xl
    border
    border-violet-500/20
    bg-[#141224]
    h-full
    flex
    flex-col
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-violet-500/40
    hover:shadow-[0_0_45px_rgba(139,92,246,.25)]
  "
>
      {/* Project Image */}

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-56 sm:h-64 lg:h-72
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-transparent
          to-transparent
        "
        />

      </div>

      {/* Content */}

<div className="p-5 sm:p-7 flex flex-col flex-1">
<h3 className="text-xl sm:text-2xl font-bold text-white">          {title}
        </h3>

<p className="mt-3 text-sm sm:text-base text-slate-400 leading-7 flex-1">          {description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-2 mt-6">

          {tech.map((item) => (
            <span
              key={item}
              className="
  px-3
  py-1
  rounded-full
  bg-violet-500/10
  border
  border-violet-500/20
  text-violet-300
  text-xs
  sm:text-sm
"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Button */}

        

      </div>

    </div>
  );
};

export default PortfolioCard;