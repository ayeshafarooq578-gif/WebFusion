import performance from "../../../../assets/images/hero/performance-card.png";

const PerformanceCard = () => {
  return (
    <img
      src={performance}
      alt="Performance"
      className="
        absolute
        bottom-0
        left-10
        w-60
        drop-shadow-[0_20px_60px_rgba(139,92,246,.35)]
      "
    />
  );
};

export default PerformanceCard;