import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../component/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Special Offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center items-start gap-6">
        <h2 className="font-palanquin text-4xl capitalize font-bold max lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redifines your exper ience with
          unbeatable deals. From premier selections to increadible savings, we
          offfer unpralleled value that sets us apart
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibliities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of execptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="Shop now"
            iconURL={arrowRight}
            backgroundColor="bg-coral-red"
            textColor="text-white"
            hoverColor={"hover:bg-red-500 hover:text-white"}
          />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-coral-red"
            textColor="text-coral-red"
            hoverColor={"hover:bg-red-100 "}
            focus={"focus:ring-coral-red focus:ring-opacity-50"}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
