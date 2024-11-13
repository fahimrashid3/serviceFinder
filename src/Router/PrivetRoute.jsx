import { useLocation } from "react-router-dom";
import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return (
      <div className="text-center pt-[40%] h-screen">
        <span className="loading loading-ball w-[80px] text-primary "></span>
      </div>
    );
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
