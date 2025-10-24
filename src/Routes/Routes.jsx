import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";
import AllSkills from "../Pages/AllSkills";
import CourseDetails from "../Pages/CourseDetails";
import NotFoundPage from "../Pages/NotFoundPage";

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
    ],
  },
]);

export default router;
