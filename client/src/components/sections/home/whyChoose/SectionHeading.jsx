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
        Why Choose WebFusion
      </span>

      <h2 className="mt-6 text-5xl font-bold text-white leading-tight">
        Building Digital Experiences
        <br />
        That Deliver Results
      </h2>

      <p className="mt-6 text-lg text-slate-400 leading-8">
        We combine creativity, modern technologies and business strategy
        to build websites that don't just look amazing —
        they help businesses grow.
      </p>

    </div>
  );
};

export default SectionHeading;