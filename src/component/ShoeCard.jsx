const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => changeBigShoeImage(imgURL);

  return (
    <div
      className={`
      border
      rounded-xl 
      ${bigShoeImg === imgURL ? "border-coral-red" : "border-none"}
      `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-cover bg-card bg-center rounded-xl sm:w-40 sm:h-40 max-sm:w-36 max-sm:h-36">
        <img
          src={imgURL}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
