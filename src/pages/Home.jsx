import React from "react";
import Banner from "../components/Banner";
import FeaturedEvents from "../components/FeaturedEvents";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home | SportNexus ");
  return (
    <div>
      <Banner />
      <FeaturedEvents />
    </div>
  );
};

export default Home;
