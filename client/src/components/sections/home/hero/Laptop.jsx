import laptop from "../../../../assets/images/hero/laptop.png";

const Laptop = () => {
  return (
    <img
      src={laptop}
      alt="Laptop"
      className="
        w-full
        max-w-[340px]
        sm:max-w-[430px]
        md:max-w-[520px]
        lg:max-w-[650px]
        h-auto
        object-contain
        drop-shadow-[0_40px_90px_rgba(139,92,246,.45)]
      "
    />
  );
};

export default Laptop;