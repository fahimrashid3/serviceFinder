const FullProfile = ({ user, category }) => {
  if (!user || !category)
    return (
      <div className="text-center pt-[40%] h-screen">
        <span className="loading loading-ball w-[80px] text-primary "></span>
      </div>
    );

  return (
    <div>
      <p>{user.name}</p>
      <p>{category.serviceProviderType}</p>
    </div>
  );
};

export default FullProfile;
