import laptop from "../../../../assets/images/hero/laptop.png";

const Laptop = () => {
  return (
    <img
      src={laptop}
      alt="Laptop"
      className="
        w-[650px]
        max-w-none
        object-contain
        drop-shadow-[0_40px_90px_rgba(139,92,246,.45)]
      "
    />
  );
};

export default Laptop;