const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 w-full sm:w-[350px] max-sm:min-w-[340px] rounded-[20px] shadow-3xl px-10 py-16">
      <div className=" w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>

      <p className="mt-5 font-palanquin text-3xl leading-normal  font-bold">
        {label}
      </p>
      <p className="mt-3 break-words font-montserrat text-slate-gray text-lg leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
