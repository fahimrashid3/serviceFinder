// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../Compunents/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useCategories from "../../../hooks/useCategories";

const Categories = () => {
  const [categories] = useCategories();

  return (
    <div className="mb-12 md:mb-24 lg:mb-32">
      <SectionTitle
        heading={"All categories"}
        subHeading={"Explore more"}
      ></SectionTitle>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category._id} className="cursor-pointer">
            <Link to={`/providers/${category.serviceProviderType}`}>
              <SwiperSlide key={category._id} className="cursor-pointer">
                <img src={category.serviceImg} alt="" />
                <h3 className="text-4xl uppercase text-center text-primary -mt-16">
                  {category.serviceProviderType}
                </h3>
              </SwiperSlide>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
