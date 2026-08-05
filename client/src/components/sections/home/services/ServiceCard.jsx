import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-violet-500/15
      bg-[#141224]
      p-6 sm:p-8
       h-full
    flex
    flex-col
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-violet-500/40
      hover:shadow-[0_0_50px_rgba(139,92,246,.25)]
      "
    >
      <div
        className="
        w-16
        h-16
        sm:w-16
sm:h-16
        rounded-2xl
        bg-violet-600/10
        flex
        items-center
        justify-center
        mb-8
        group-hover:bg-violet-600/20
        transition
      "
      >
<Icon
  size={28}
  className="text-violet-400 sm:w-[34px] sm:h-[34px]"
 />      </div>

<h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">        {title}
      </h3>

<p className="text-sm sm:text-base text-slate-400 leading-7">        {description}
      </p>

      

      <div
        className="
        absolute
        -bottom-20
        -right-20
        w-40
        h-40
        rounded-full
        bg-violet-600/10
        blur-3xl
        group-hover:bg-violet-500/20
        transition
      "
      />

    </div>
  );
};

export default ServiceCard;