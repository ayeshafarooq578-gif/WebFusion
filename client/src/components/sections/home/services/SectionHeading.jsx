const SectionHeading = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20">

      <span
        className="
        inline-block
        px-5
        py-2
        rounded-full
        border
        border-violet-500/30
        bg-violet-500/10
        text-violet-400
        text-sm
        font-semibold
        tracking-wider
        uppercase
      "
      >
        Our Services
      </span>

      <h2
        className="
        mt-6
        text-5xl
        font-bold
        text-white
        leading-tight
      "
      >
        Complete Web Solutions
      </h2>

      <p
        className="
        mt-6
        text-lg
        text-slate-400
        leading-8
      "
      >
        We craft modern websites and powerful web applications that help
        businesses grow, engage customers, and stand out in the digital world.
      </p>

    </div>
  );
};

export default SectionHeading;