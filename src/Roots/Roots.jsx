import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Roots = () => {
  return (
    <div className=" bg-[#faf0f0]">
      <div className=" max-w-7xl mx-auto min-h-screen">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
