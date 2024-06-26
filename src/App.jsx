import Nav from "./component/Nav";
import {
  Hero,
  SuperQuality,
  PopularProducts,
  CustmerReview,
  Footer,
  Services,
  SpecialOffer,
  Subscribe,
} from "./sections";

const App = () => {
  return (
    <main className="realtive">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding top-4">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustmerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
    </main>
  );
};
export default App;
