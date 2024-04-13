import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constant";
import Button from "../component/Button";
import { thumbnailShoe1 } from "../assets/images";
import ShoeCard from "../component/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(thumbnailShoe1);

  const handleChangeBigShoe = (img) => {
    setBigShoeImg(img);
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex xl:flex-row flex-col gap-10 justify-center max-container"
    >
      <diV className="relative flex flex-col xl:w-2/5 justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat md:pt-8">
          Our Summmer Collection
        </p>
        <h1 className="mt-8 font-palanquin text-8xl max-sm:text-[72px]  max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The new Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-sm">
          Discover stylish Nike arrivals, quality confort, and innovation for
          your active life.
        </p>
        <Button label="Show Now" iconURL={arrowRight} />
        <div className="flex flex-wrap justify-start items-center w-full gap-16 mt-20 max-sm:justify-center max-sm:gap-12">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-bold font-palanquin text-4xl max-sm:text-3xl">
                {stat.value}
              </p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </diV>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 max-sm:py-16 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Shoe collecton"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="absolute -bottom-20 flex sm:gap-6 gap-4">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgURL={shoe.thumbnail}
                changeBigShoeImage={handleChangeBigShoe}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
