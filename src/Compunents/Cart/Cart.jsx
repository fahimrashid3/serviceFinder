import { Link } from "react-router-dom";

const Cart = ({ user }) => {
  const { _id, userImg, category, name, qualification } = user;

  return (
    <div className="overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={userImg} alt={category} />
        </figure>
        <div className="card-body">
          <p className="text-green-500">Available</p>
          <h2 className="card-title">{name}</h2>
          <p className="text-lg">{qualification}</p>
          <div className="flex items-center card-actions justify-end">
            <p className="text-lg">{category}</p>
            <Link
              to={`/shortProfile/${_id}`}
              className="btn btn-success btn-outline"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
