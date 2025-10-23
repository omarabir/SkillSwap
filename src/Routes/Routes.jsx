import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";
import AllSkills from "../Pages/AllSkills";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
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
    ],
  },
]);

export default router;
