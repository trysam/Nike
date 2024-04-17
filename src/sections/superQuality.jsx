import Button from "../component/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full"
    >
      <div className="flex flex-1 justify-start items-center gap-6">
        <diV className="relative flex flex-col xl:w-2/5 justify-center items-start w-full max-xl:padding-x ">
          <h2 className="font-palanquin text-4xl capitalize font-bold max lg:max-w-lg">
            We provide you
            <span className="text-coral-red"> super </span>
            <span className="text-coral-red">quality </span>Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticolous crafted footware
            is designed to elevate your experience, providing you unmatched
            quality, innovation, and a touch of elegance
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button label="View details" />
          </div>
        </diV>
        <div className="flex flex-1 justify-end items-center">
          <img
            src={shoe8}
            alt="Super Product"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
