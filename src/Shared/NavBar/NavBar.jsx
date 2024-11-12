import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const handelLogout = () => {
    logOut();
  };
  console.log(user);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Our Services</NavLink>
      </li>
      <li>
        <NavLink to="/providers/Teacher">All Providers</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-60 text-white max-w-screen-2xl bg-dark-700 rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost">
          {/* TODO : logo set up */}
          <h1 className="font-bold text-4xl">ServiceFinder</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className=" pr-5 text-4xl dark:text-dark-900 dark:hover:text-dark-700 text-white hover:text-gray-300"
          >
            <CgProfile />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-dark-900 text-white dark:bg-gray-400 dark:text-dark-900  rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link>Profile</Link>
            </li>

            <li>
              {user ? (
                <Link to="/login">Login</Link>
              ) : (
                <p onClick={handelLogout}>logout</p>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
