import React from "react";
import CountUp from "react-countup";

const SuccessEvents = () => {
  return (
    <div className="w-11/12 mx-auto py-5">
      <h3 className="text-center font-bold text-4xl">
        We Provide Best Services
      </h3>
      <p className="text-center py-3">
        Our platform connects you with verified, Events across various Sports —
        all at your convenience.{" "}
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        <div className="bg-[#37b6f5] text-white rounded-2xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300 ">
          <CountUp start={0} end={199} delay={0} duration={10}>
            {({ countUpRef }) => (
              <div className="py-3 flex ">
                <span className="text-6xl" ref={countUpRef} />
                <p className="text-6xl">+</p>
              </div>
            )}
          </CountUp>
          <h3 className="font-bold ">VICTORY AWARDS</h3>
        </div>
        <div className="bg-[#37b6f5] text-white rounded-2xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300 ">
          <CountUp start={0} end={467} delay={0} duration={10}>
            {({ countUpRef }) => (
              <div className="py-3 flex ">
                <span className="text-6xl" ref={countUpRef} />
                <p className="text-6xl">+</p>
              </div>
            )}
          </CountUp>
          <h3 className="font-bold">EVENTS & CHALLENGES</h3>
        </div>
        <div className="bg-[#37b6f5] text-white rounded-2xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300 ">
          <CountUp start={0} end={1900} delay={0} duration={10}>
            {({ countUpRef }) => (
              <div className="py-3 flex ">
                <span className="text-6xl" ref={countUpRef} />
                <p className="text-6xl">+</p>
              </div>
            )}
          </CountUp>
          <h3 className="font-bold">ACTIVE & ENERGETIC MEMBERS</h3>
        </div>
      </div>
    </div>
  );
};

export default SuccessEvents;
