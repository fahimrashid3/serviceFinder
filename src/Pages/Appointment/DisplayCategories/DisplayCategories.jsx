const DisplayCategories = ({ category }) => {
  const colorPrimary = category.colorPrimary;
  const colorSecondary = category.colorPrimary;

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 justify-center">
      {category?.categories?.length ? (
        category.categories.map((item, index) => (
          <div
            className={`border-2 hover:border-[${colorPrimary}] border-[${colorSecondary}]  p-4 rounded-lg cursor-pointer hover:bg-[${colorPrimary}] transition-all duration-200`}
            key={index}
          >
            <p className="text-2xl font-bold px-2 text-center">{item.name}</p>
          </div>
        ))
      ) : (
        <p className="flex justify-center">Select Providers</p>
      )}
    </div>
  );
};

export default DisplayCategories;
