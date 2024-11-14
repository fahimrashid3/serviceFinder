import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Services from "../Pages/Services/Services";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AllProviders from "../Pages/AllProviders/AllProviders/AllProviders";
import FullProfile from "../Pages/Profile/FullProfile/FullProfile";
import ShortProfile from "../Pages/Profile/ShortProfile/ShortProfile";
import PrivetRoute from "./PrivetRoute";
import MyAppointment from "../Pages/MyAppointment/MyAppointment/MyAppointment";
import UserProfile from "../Pages/Profile/UserProfile/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/appointment",
        element: (
          <PrivetRoute>
            <Appointment />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/providers",
        element: <AllProviders />,
      },
      {
        path: "/providers/:category",
        element: <AllProviders />,
      },
      {
        path: "/shortProfile/:_id",
        element: <ShortProfile />,
      },
      {
        path: "/fullProfile/:_id",
        element: <FullProfile />,
      },
      {
        path: "/myAppointment",
        element: <MyAppointment />,
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
