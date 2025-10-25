import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";
import AllSkills from "../Pages/AllSkills";
import CourseDetails from "../Pages/CourseDetails";
import NotFoundPage from "../Pages/NotFoundPage";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import MyProfile from "../Pages/MyProfile";
import ForgotPassword from "../Pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/skilldata.json"),
        Component: Home,
      },
      {
        path: "/all-skills",
        loader: () => fetch("/skilldata.json"),
        Component: AllSkills,
      },
      {
        path: "/skill/:id",
        loader: () => fetch("/skilldata.json"),
        Component: CourseDetails,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/myprofile",
        Component: MyProfile,
      },
      {
        path: "/forgotpassword",
        Component: ForgotPassword,
      },
    ],
  },
]);

export default router;
