import { useEffect, useState } from "react";
import SectionTitle from "../../../Compunents/SectionTitle/SectionTitle";

import quotation from "../../../assets/icon/quotation .png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        heading={"Reviews"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" lg:space-y-6 md:space-y-8 py-10 space-y-3 px-5 md:px-0">
              <Rating
                className="mx-auto"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <img
                className="h-16 text-center mx-auto"
                src={quotation}
                alt=""
              />
              <p className="text-center lg:px-32 md:px-16 px-5  space-y-5">
                {review.details}
              </p>
              <h3 className="text-center text-[#D99904] text-3xl">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
