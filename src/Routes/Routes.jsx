import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);

export default router;
