import Lottie from "lottie-react";
import React from "react";
// import groovyWalkAnimation from "./groovyWalk.json";
import animationData from "../json/Animation.json";

const Animation = ({
  loop = true,
  autoplay = true,
  style = { height: 500, width: 300 },
}) => {
  return (
    <div className="flex justify-center  rounded-xl items-center">
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={style}
      />
    </div>
  );
};

export default Animation;
