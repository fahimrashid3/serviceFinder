import SectionTitle from "../../../Compunents/SectionTitle/SectionTitle";
import ShortProfileCart from "../../../Compunents/ShortProfileCart/ShortProfileCart";
import { useNavigate } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";

const PopularServices = () => {
  const navigate = useNavigate();
  const [users] = useUsers();

  const allPopularUsers = users.filter((item) => item.rating >= 4.8);
  const popularUsers = allPopularUsers.slice(0, 6);

  return (
    <div className="mb-12 md:mb-20">
      <SectionTitle
        heading="Popular Services"
        subHeading="from our services"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-12 md:mb-20 ">
        {popularUsers.map((user) => (
          <ShortProfileCart key={user._id} user={user}></ShortProfileCart>
        ))}
      </div>
      <div className="mx-auto text-center">
        <button
          onClick={() => {
            navigate("/services"), scrollTo(0, 0);
          }}
          className="btn btn-outline btn-primary border-0 border-b-4"
        >
          Show all
        </button>
      </div>
    </div>
  );
};

export default PopularServices;
