// import { useParams } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
import useCategories from "../../../hooks/useCategories";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import Cart from "../../../Compunents/Cart/Cart";
import SectionBanner from "../../../Compunents/SectionBanner/SectionBanner";
import img from "../../../assets/services/doctorSectionBanner.png";

const AllProviders = () => {
  // const { category } = useParams();
  const [users, usersLoading] = useUsers();
  const [categories, categoriesLoading] = useCategories();

  // TODO: set defaultIndex (tabIndex) as category
  // TODO: introduce pagination
  const [tabIndex, setTabIndex] = useState(0);

  if (usersLoading || categoriesLoading)
    return (
      <div className="text-center pt-[40%] h-screen">
        <span className="loading loading-ball w-[80px] text-primary "></span>
      </div>
    );

  return (
    <div className="-mt-20 min-h-screen">
      <SectionBanner title="All Provider " img={img}></SectionBanner>
      <p className="text-2xl font-semibold text-center my-10 dark:text-white text-dark-900">
        Browse through the Providers categories
      </p>
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="text-center">
            <TabList>
              {categories.map((category, index) => (
                <Tab key={index}>{category.serviceProviderType}</Tab>
              ))}
            </TabList>
          </div>
          <div className="mt-10">
            {categories.map((category) => (
              <TabPanel key={category._id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                  {users
                    .filter(
                      (user) => user.category === category.serviceProviderType
                    )
                    .map((item) => (
                      <Cart key={item._id} user={item}></Cart>
                    ))}
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AllProviders;
