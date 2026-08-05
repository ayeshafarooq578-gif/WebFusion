const TechCard = ({ icon, label, className = "" }) => {
  return (
    <div
      className={`
        absolute
        ${className}

        w-20
        h-24

        rounded-2xl

        bg-[#161625]/85
        backdrop-blur-xl

        border border-violet-500/20

        flex
        flex-col
        items-center
        justify-center

        shadow-[0_0_30px_rgba(139,92,246,.20)]

        transition-all
        duration-500

        hover:scale-105
        hover:shadow-[0_0_50px_rgba(139,92,246,.40)]
      `}
    >
      <div className="text-4xl text-violet-400">
        {icon}
      </div>

      <p className="mt-2 text-[11px] text-slate-300">
        {label}
      </p>
    </div>
  );
};

export default TechCard;