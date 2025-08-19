import React from "react";
import Banner from "../components/Banner";
import FeaturedEvents from "../components/FeaturedEvents";
import useTitle from "../hooks/useTitle";
import About from "./About";
import Contact from "./Contact";
import SuccessEvents from "../components/SuccessEvents";
import SportsPartners from "../components/SportsPartners";

const Home = () => {
  useTitle("Home | SportNexus ");
  return (
    <div className="">
      <Banner />
      <FeaturedEvents />
      <SuccessEvents />
      <SportsPartners />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
