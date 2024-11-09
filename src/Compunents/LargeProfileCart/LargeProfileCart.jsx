import SectionBanner from "../SectionBanner/SectionBanner";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers";

// TODO: show all button not working
// TODO: load those data which are needed using api filter

const LargeProfileCart = ({ category }) => {
  const navigate = useNavigate();
  const { serviceProviderType, serviceImg, shortDescription } = category;
  const [users] = useUsers();

  const allRequireUser = users.filter(
    (item) => item.category === serviceProviderType
  );
  const requireUser = allRequireUser.slice(0, 8);

  return (
    <div className="text-dark-900 dark:text-white">
      <div className="mb-10 md:mb-16 lg:mb-20">
        <SectionBanner
          img={serviceImg}
          title={serviceProviderType}
          descriptions={shortDescription}
        ></SectionBanner>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {requireUser.map((user) => (
          <Cart key={user._id} user={user}></Cart>
        ))}
      </div>
      <div className="mx-auto text-center mt-12">
        <button
          onClick={() => navigate(`/providers/${serviceProviderType}`)}
          className="btn btn-outline btn-success border-0 border-b-4 lg:mb-20 md:mb-16 mb-8"
        >
          Show all
        </button>
      </div>
    </div>
  );
};

export default LargeProfileCart;
