import Review from "../component/Review";
import { reviews } from "../constant";

const CustmerReview = () => {
  return (
    <section className="max-container">
      <h3 className="text-3xl font-palanquin font-bold text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text mt-4 m-auto max-w-lg text-center">
        Here genuie stories from our statisfied cutomers about their experinces
        with us
      </p>
      <div className="flex-1 flex justify-evenly items-center gap-14 mt-24 max-lg:flex-col">
        {reviews.map((review) => (
          <Review
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustmerReview;
