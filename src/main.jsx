import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

// Initialize AOS
AOS.init({
  duration: 800,
  once: false,
  mirror: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </StrictMode>
);
