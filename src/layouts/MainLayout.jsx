import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#c8e3f0] ">
      <div className="flex-grow">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
