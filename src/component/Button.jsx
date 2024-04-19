const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  hoverColor,
  focus,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 border py-4 px-7 rounded-full  text-lg  font-montserrat leading-1 focus:ring focus:outline-none ${
        backgroundColor
          ? `${backgroundColor} ${hoverColor} ${textColor} ${borderColor} ${focus}`
          : "hover:bg-red-500 bg-coral-red text-slate-100 focus:ring-red-200 "
      }`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arroow-right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
