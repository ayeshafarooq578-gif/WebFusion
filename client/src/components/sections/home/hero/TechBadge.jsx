const TechBadge = ({ image, name, className }) => {
  return (
    <div
      className={`
        absolute
        ${className}
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-[#171726]/80
        backdrop-blur-xl
        px-4
        py-3
        shadow-[0_0_30px_rgba(139,92,246,.15)]
      `}
    >
      <img
        src={image}
        alt={name}
        className="w-8 h-8"
      />

      <span className="text-white font-medium">
        {name}
      </span>
    </div>
  );
};

export default TechBadge;