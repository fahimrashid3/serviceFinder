import { Helmet } from "react-helmet";
import SectionBanner from "../../../Compunents/SectionBanner/SectionBanner";
import SectionTitle from "../../../Compunents/SectionTitle/SectionTitle";
import useCategories from "../../../hooks/useCategories";
import { useEffect, useState } from "react";
import DisplayCategories from "../displayCategories/displayCategories";
import { useLocation } from "react-router-dom";

const Appointment = () => {
  const [categories] = useCategories();
  const [category, setCategory] = useState([]);
  const location = useLocation();
  const { bookingBtnCategory } = location.state || "Teacher";
  console.log(bookingBtnCategory);
  useEffect(() => {
    if (bookingBtnCategory) {
      setCategory(bookingBtnCategory);
    }
  }, [bookingBtnCategory]);

  return (
    <div className="-mt-20 min-h-screen">
      <Helmet>
        <title>ServiceFinder | Appointment</title>
      </Helmet>
      <SectionBanner
        img={"https://i.ibb.co.com/6bm34g2/appointment.jpg"}
        title="Appointment"
      ></SectionBanner>
      <SectionTitle
        heading={"Search & Book"}
        subHeading={"Find your requirements"}
      ></SectionTitle>
      <div className="flex gap-5 justify-center ">
        {categories.map((category) => (
          <div
            className="border-2 p-4 rounded-lg cursor-pointer hover:bg-primary transition-all duration-200"
            key={category._id}
            onClick={() => setCategory(category)}
          >
            <p className="text-2xl font-bold">{category.serviceProviderType}</p>
          </div>
        ))}
      </div>
      <div className="md:mt-10 mt-6">
        <DisplayCategories category={category}></DisplayCategories>
      </div>
    </div>
  );
};

export default Appointment;
