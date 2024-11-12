import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import SectionBanner from "../../../Compunents/SectionBanner/SectionBanner";
import SectionTitle from "../../../Compunents/SectionTitle/SectionTitle";

const ShortProfile = () => {
  const { _id } = useParams();
  // const [users] = useUsers();
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [category, setCategory] = useState(null);
  useEffect(() => {
    axiosPublic.get(`/user/${_id}`).then((res) => {
      const data = res.data;
      setUser(data);
      setCategoryName(data.category);
    });
  }, [_id, axiosPublic]);

  useEffect(() => {
    axiosPublic
      .get("/category", { params: { category: categoryName } })
      .then((res) => {
        console.log(res.data);
        setCategory(res.data);
      });
  }, [axiosPublic, categoryName]);

  if (!user || !category)
    return (
      <div className="text-center pt-[40%] h-screen">
        <span className="loading loading-ball w-[80px] text-primary "></span>
      </div>
    );

  return (
    <div className="-mt-20 mb-20 dark:bg-dark-700 text-dark-900 dark:text-white">
      <SectionBanner
        img={category.serviceImg}
        title={category.serviceProviderType}
      ></SectionBanner>
      <SectionTitle
        heading={user.category}
        subHeading="Have a Look"
      ></SectionTitle>
      <div className="flex gap-10">
        <div className="flex-1">
          <img className="rounded-lg " src={user.userImg} alt="" />
        </div>
        <div className="flex-1 lg:space-y-5">
          <p className="font-semibold lg:text-3xl md:text-2xl text-xl">
            Our Services
          </p>
          <div className=" rounded-lg p-5 bg-slate-200">
            <p>{user.Name}</p>
            <p>{user.qualification}</p>
            <p>{user.location}</p>
          </div>
          <img
            className="w-full h-[200px] rounded-lg"
            src={category.serviceImg}
            alt=""
          />
          {/* {user.education.map((item, index) => (
            <p key={index} className="font-bold">
              <span className="min-w-24"> {item.degree}</span>{" "}
              <span className="font-normal">from</span>
              <span> {item.institution}</span>
            </p>
          ))} */}
          <p className="text-lg">{user.about}</p>
          <Link
            to={`/fullProfile/${_id}`}
            user={user}
            category={category}
            className="btn btn-success btn-outline"
          >
            View Full Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShortProfile;
