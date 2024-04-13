const Button = ({ label, iconURL }) => {
  return (
    <button className=" flex justify-center items-center gap-2 border py-4 px-7 rounded-full text-slate-100 text-lg  font-montserrat leading-1 focus:ring focus:outline-none focus:ring-red-200 bg-coral-red hover:bg-red-500">
      {label}

      <img
        src={iconURL}
        alt="arroow-right"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
