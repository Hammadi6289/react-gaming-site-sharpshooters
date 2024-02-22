import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const GameCenters = () => {
  return (
    <div className="w-full py-[6rem] ">
      <Fade right>
        <div>
          <p className="text-[1.4rem] font-bold text-center ">
            Our Game Centers
          </p>
          <p className="text-sm text-gray-50 text-center mt-4 ">
            Our game centers are located all over the West Coast, where you can
            enjoy the best gaming experience.
          </p>
        </div>
      </Fade>

      <Fade bottom>
        <div className="flex flex-wrap xl:grid grid-cols-3 sm:space-x-6 items-center justify-center">
          <img
            src={require("../images/center1.png")}
            className="mt-[2rem] hover:animate-pulse cursor-pointer "
          />
          <img
            src={require("../images/center2.png")}
            className="mt-[2rem] hover:animate-pulse cursor-pointer "
          />
          <img
            src={require("../images/center3.png")}
            className="mt-[2rem] hover:animate-pulse cursor-pointer "
          />
          <img
            src={require("../images/center4.png")}
            className="mt-[2rem] hover:animate-pulse cursor-pointer "
          />
          <img
            src={require("../images/center5.png")}
            className="mt-[2rem] hover:animate-pulse cursor-pointer "
          />
          <img
            src={require("../images/center6.png")}
            className="mt-[2rem] hover:animate-pulse cursor-pointer "
          />
        </div>
      </Fade>

      <Fade bottom>
        <div className="w-full flex items-center justify-center my-[4rem] ">
          <Link
            to="/about"
            className="bg-[#160E46] w-[7rem] py-3 text-sm rounded-lg block text-center"
          >
            SEE ALL
          </Link>
        </div>
      </Fade>
    </div>
  );
};
export default GameCenters;
