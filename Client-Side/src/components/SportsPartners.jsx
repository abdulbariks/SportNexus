import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaFutbol,
  FaBasketballBall,
  FaVolleyballBall,
  FaRunning,
} from "react-icons/fa";
import { GiWhistle, GiTrophy } from "react-icons/gi";

const partners = [
  { name: "Football League", icon: <FaFutbol className="text-green-500" /> },
  {
    name: "Basketball Club",
    icon: <FaBasketballBall className="text-orange-500" />,
  },
  {
    name: "Volleyball Association",
    icon: <FaVolleyballBall className="text-yellow-500" />,
  },
  {
    name: "Athletics Federation",
    icon: <FaRunning className="text-blue-500" />,
  },
  { name: "Referees Council", icon: <GiWhistle className="text-gray-600" /> },
  {
    name: "Championship Trophy",
    icon: <GiTrophy className="text-yellow-400" />,
  },
];

const SportsPartners = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Our Sports Partners
      </h2>
      <Marquee speed={60} gradient={false} pauseOnHover>
        <div className="flex gap-16 mt-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center min-w-[120px]"
            >
              <div className="text-5xl mb-2 drop-shadow-md">{partner.icon}</div>
              <span className="text-sm font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SportsPartners;
