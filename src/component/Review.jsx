import { star } from "../assets/icons";

const Review = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <section>
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center">
        <img
          src={imgURL}
          alt={customerName}
          className="w-20 h-20 rounded-full object-cover"
        />

        <p className="mt-6 font-montserrat text-slate-gray text-lg leading-normal">
          {feedback}
        </p>
        <div className="mt-2 flex justify-center items-center gap-2.5">
          <img
            src={star}
            alt="rating"
            height={24}
            width={24}
            className="object-contain m-0"
          />
          <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
        </div>

        <h3 className="mt-1 font-palanquin font-bold text-3xl text-slate-gray">
          {customerName}
        </h3>
      </div>
    </section>
  );
};

export default Review;
