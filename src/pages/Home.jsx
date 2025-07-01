import React from "react";
import Banner from "../components/Banner";
import FeaturedEvents from "../components/FeaturedEvents";
import useTitle from "../hooks/useTitle";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  useTitle("Home | SportNexus ");
  return (
    <div>
      <Banner />
      <FeaturedEvents />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
