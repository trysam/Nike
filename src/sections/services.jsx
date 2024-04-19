import { services } from "../constant";
import ServiceCard from "../component/ServiceCard";

const Services = () => {
  return (
    <section>
      <div className="max-container flex items-center justify-center flex-wrap gap-8">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
