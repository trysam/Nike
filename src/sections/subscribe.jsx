import Button from "../component/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="font-palanquin text-4xl leading-[68px] font-bold lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 rounded-full border sm:border-slate-gray">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full ">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
