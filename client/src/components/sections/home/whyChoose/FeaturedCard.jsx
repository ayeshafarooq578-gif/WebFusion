import { ArrowRight } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-violet-500/20
      bg-[#141224]
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-violet-500/40
      hover:shadow-[0_0_40px_rgba(139,92,246,.25)]
      "
    >
      <div
        className="
        w-16
        h-16
        rounded-2xl
        bg-violet-600/10
        flex
        items-center
        justify-center
        mb-6
        transition
        group-hover:bg-violet-600/20
      "
      >
        <Icon
          className="text-violet-400"
          size={34}
        />
      </div>

      <h3 className="text-2xl font-semibold text-white mb-4">
        {title}
      </h3>

      <p className="text-slate-400 leading-7">
        {description}
      </p>

     

      <div
        className="
        absolute
        -bottom-24
        -right-24
        w-44
        h-44
        rounded-full
        bg-violet-500/10
        blur-3xl
      "
      />
    </div>
  );
};

export default FeatureCard;