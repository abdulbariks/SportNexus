import React from "react";
import useTitle from "../hooks/useTitle";

const About = () => {
  useTitle("About | SportNexus ");
  return (
    <section className="w-11/12 mx-auto bg-[#98d0ec] my-10 rounded-md py-12 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center  mb-8">
          About SportNexus
        </h2>

        <p className="text-lg  text-center mb-10">
          <span className="font-semibold">SportNexus</span> is your one-stop
          solution for organizing, managing, and participating in sports events
          with ease and efficiency. Whether you're a player, coach, or event
          organizer — SportNexus brings the sports community together in one
          powerful platform.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-[#37b6f5] rounded-2xl shadow-md p-6 text-center text-white hover:shadow-2xl hover:-translate-y-2 transition transform duration-300">
            <h3 className="text-xl font-semibold mb-3">
              Seamless Event Management
            </h3>
            <p>
              Create, schedule, and promote your sports events effortlessly.
              Manage participants, venues, and time with complete control.
            </p>
          </div>

          <div className="bg-[#37b6f5] rounded-2xl shadow-md p-6 text-center text-white hover:shadow-2xl hover:-translate-y-2 transition transform duration-300">
            <h3 className="text-xl font-semibold mb-3">Real-time Updates</h3>
            <p>
              Stay informed with real-time updates, notifications, and match
              results. Never miss an important update again.
            </p>
          </div>

          <div className="bg-[#37b6f5] rounded-2xl shadow-md p-6 text-center text-white hover:shadow-2xl hover:-translate-y-2 transition transform duration-300">
            <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
            <p>
              Connect with fellow sports enthusiasts. Find teammates, track
              performance, and grow your sports network.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="">
            At <span className="font-semibold ">SportNexus</span>, we believe in
            the power of sports to unite and inspire. Join us and be part of a
            growing sports community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
