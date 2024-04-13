import { products } from "../constant";
import ProductCard from "../component/ProductCard";

const PopularProducts = () => {
  return (
    <section id="popular-products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <div className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          {" "}
          Experience top notch quality and style with sought after selections.
          Discover a world of comfort, design and value{" "}
        </div>
        <diV>
          <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products.map((product) => (
              <div key={product.imgURL}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </diV>
      </div>
    </section>
  );
};

export default PopularProducts;
