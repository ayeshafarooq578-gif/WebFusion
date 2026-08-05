const dots = [
  [80,120],
  [260,70],
  [450,180],
  [640,110],
  [540,470],
  [760,380],
  [900,520],
  [1040,300],
  [980,150],
  [700,650],
];

const FloatingParticles = () => {
  return (
    <>
      {dots.map(([x,y],i)=>(
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_18px_#8B5CF6] animate-pulse"
          style={{
            left:x,
            top:y,
            animationDelay:`${i*0.3}s`
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;