const Button = ({ children, 
    varient = "primary",
    className = "", ...props }) => {
        const variants = {
            primary:
      "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(108,59,255,.45)]",

    secondary:
      "border border-violet-500 text-white hover:bg-violet-500/10",

    ghost:
      "text-gray-300 hover:text-white",
  };

  return (
    <button
    className={`
        px-7
        py-3.5
        rounded-xl
        font-medium
        duration-300
        transition-all
        ${variants[varient]}
        ${className}`}
        {...props}
    >
        {children}
    </button>
  );
}

export default Button;