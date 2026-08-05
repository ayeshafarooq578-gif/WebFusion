const LightTrails = () => {
  return (
    <>
      {/* Main Arc */}
      <div
        className="
        absolute
        w-[750px]
        h-[750px]
        rounded-full
        border
        border-violet-500/20
        blur-[1px]
        rotate-[20deg]
        top-16
        left-12
      "
      />

      {/* Second Arc */}
      <div
        className="
        absolute
        w-[600px]
        h-[600px]
        rounded-full
        border
        border-fuchsia-500/20
        rotate-[20deg]
        top-36
        left-24
      "
      />

      {/* Third Arc */}
      <div
        className="
        absolute
        w-[430px]
        h-[430px]
        rounded-full
        border
        border-purple-500/20
        rotate-[20deg]
        top-52
        left-52
      "
      />
    </>
  );
};

export default LightTrails;