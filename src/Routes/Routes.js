import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../Layout/AdminDashboard";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import ManageDoctors from "../Pages/DashBoard/ManageDoctors/ManageDoctors";
// import DashBoard from "../Pages/DashBoard/DashBoard/DashBoard";
import MyAppointment from "../Pages/DashBoard/MyAppointment/MyAppointment";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Forget from "../Pages/Forget/Forget";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/forgetEmail",
        element: <Forget></Forget>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <DisplayError></DisplayError>,
    element: (
      <PrivateRoute>
        <AdminDashboard></AdminDashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
            <Payment />
        ),
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-three-nu.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);
