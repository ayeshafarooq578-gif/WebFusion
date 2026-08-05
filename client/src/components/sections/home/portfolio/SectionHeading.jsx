const SectionHeading = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-20">

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
          uppercase
          tracking-wider
          text-sm
          font-semibold
        "
      >
        Featured Projects
      </span>

      <h2 className="mt-6 text-5xl font-bold text-white leading-tight">
        Some of Our
        <br />
        Latest Work
      </h2>

      <p className="mt-6 text-lg text-slate-400 leading-8">
        We craft premium digital experiences that help businesses
        grow online through modern design and scalable technology.
      </p>

    </div>
  );
};

export default SectionHeading;