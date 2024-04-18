import { star } from "../assets/icons";
const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-1 flex-col  w-full sm:gap-1.5 ">
      <img src={product.imgURL} alt={product.name} height={400} width={500} />
      <div className="flex justify-start items-center gap-2.5">
        <img src={star} alt="rating" height={24} width={24} />{" "}
        <p className="font-montserrat leading-normal text-xl text-slate-gray">
          (45)
        </p>
      </div>
      <h3 className="font-palanquin font-semibold text-2xl leading-normal">
        {product.name}
      </h3>
      <p className="font-montserrat text-2xl text-coral-red leading-normal">
        {product.price}
      </p>
    </div>
  );
};

export default ProductCard;
