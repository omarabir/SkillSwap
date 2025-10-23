import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const Roots = () => {
  return (
    <div className="bg-[#faf0f0] min-h-screen">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
