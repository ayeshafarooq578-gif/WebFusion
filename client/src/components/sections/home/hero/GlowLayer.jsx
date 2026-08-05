const GlowLayer = () => {
  return (
    <>
      <div
        className=" animate-float-fast
        absolute
        w-[750px]
        h-[750px]
        rounded-full
        bg-violet-700/20
        blur-[120px]
      "
      />

      <div
        className=" animate-float-fast
        absolute
        w-[420px]
        h-[420px]
        rounded-full
        bg-fuchsia-600/20
        blur-[100px]
      "
      />
    </>
  );
};

export default GlowLayer;