import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
// import useUsers from "../../../hooks/useUsers";

const ShortProfile = () => {
  const { _id } = useParams();
  // const [users] = useUsers();
  const axiosPublic = useAxiosPublic();

  const [user, setUser] = useState(null);
  useEffect(() => {
    axiosPublic.get(`user/${_id}`).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, [_id, axiosPublic]);
  console.log(user);

  if (!user)
    return (
      <div className="text-center pt-[40%] h-screen">
        <span className="loading loading-ball w-[80px] text-primary "></span>
      </div>
    );

  return <div>{user ? <h1>{user.name}</h1> : <p>Loading user data...</p>}</div>;
};

export default ShortProfile;
