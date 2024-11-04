import { useEffect, useState } from "react";
import SectionTitle from "../../../Compunents/SectionTitle/SectionTitle";
import ShortProfileCart from "../../../Compunents/ShortProfileCart/ShortProfileCart";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("users.json")
      .then((res) => res.json())
      .then((data) => {
        const allPopularServices = data.filter((item) => item.rating >= 4.8);
        const popularServices = allPopularServices.slice(0, 6);
        setServices(popularServices);
      });
  }, []);

  return (
    <div className="mb-12 md:mb-20">
      <SectionTitle
        heading="Popular Services"
        subHeading="from our services"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-12 md:mb-20">
        {services.map((service) => (
          <ShortProfileCart
            key={service._id}
            service={service}
          ></ShortProfileCart>
        ))}
      </div>
      <div className="mx-auto text-center">
        <button className="btn btn-outline btn-primary">Show all</button>
      </div>
    </div>
  );
};

export default PopularServices;
