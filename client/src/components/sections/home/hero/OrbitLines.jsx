const OrbitLines = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      viewBox="0 0 1200 900"
      fill="none"
    >
      <defs>
        <linearGradient id="orbit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#A855F7" stopOpacity="1" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <path
        d="M180 250 Q600 40 1020 250"
        stroke="url(#orbit)"
        strokeWidth="30"
        strokeDasharray="12 12"
      />

      <path
        d="M180 650 Q600 860 1020 650"
        stroke="url(#orbit)"
        strokeWidth="3"
        strokeDasharray="12 12"
      />
    </svg>
  );
};

export default OrbitLines;