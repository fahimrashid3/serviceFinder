import LargeProfileCart from "../../Compunents/LargeProfileCart/LargeProfileCart";
import SectionBanner from "../../Compunents/SectionBanner/SectionBanner";
import img from "../../assets/services/teacherSectinBanner.png";
import SectionTitle from "../../Compunents/SectionTitle/SectionTitle";
import Cart from "../../Compunents/Cart/Cart";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import useUsers from "../../hooks/useUsers";

const Services = () => {
  const navigate = useNavigate();
  const [categories] = useCategories();
  const [users] = useUsers();
  const allPopularUsers = users.filter((item) => item.rating >= 4.8);
  const popularUsers = allPopularUsers.slice(0, 8);

  // TODO: fixe fetch problem using apis (fetch only required item)

  return (
    <div className="-mt-20">
      <Helmet>
        <title>ServiceFinder | Services</title>
      </Helmet>
      <SectionBanner title="Our Services" img={img}></SectionBanner>
      <SectionTitle
        heading="Top Providers"
        subHeading="Have a looks"
      ></SectionTitle>
      <div
        id="topProviders"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {popularUsers.map((user) => (
          <Cart key={user._id} user={user}></Cart>
        ))}
      </div>
      <div className="mx-auto text-center mt-12">
        <button
          onClick={() => navigate("/providers")}
          className="btn btn-outline btn-success border-0 border-b-4 lg:mb-20 md:mb-16 mb-8"
        >
          Show all
        </button>
      </div>
      {categories.map((category) => (
        <LargeProfileCart
          key={category._id}
          category={category}
        ></LargeProfileCart>
      ))}
    </div>
  );
};

export default Services;
