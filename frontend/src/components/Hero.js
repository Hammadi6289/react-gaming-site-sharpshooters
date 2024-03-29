import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`flex flex-col xl:flex-row xl:h-screen items-center pt-[5rem] w-full ${
        menuOpen ? "mt-[150rem]" : "" // Adjust the top margin when menu is open
      }`}
    >
      <Fade bottom>
        <div className="flex flex-col flex-1 h-full items-center xl:items-start justify-center text-white text-center xl:text-start space-y-8 mb-[4rem] ">
          <p className="text-[#e87d0e] font-medium">
            Join the gaming revolution with us!
          </p>
          <h1 className="text-[2rem] font-bold w-full xl:w-[25rem] ">
            Elevate your gaming experience
          </h1>

          <p className="text-xs w-full xl:w-[19rem] text-gray-200 ">
            Immerse yourself in cutting-edge gaming technology and
            entertainment.
          </p>
          <Link
            to="/games"
            className="text-sm w-[10rem] py-2 rounded-full bg-gradient-to-tr from-[#8A2BE2] to-[#FB9E3C] text-center"
          >
            Get more details
          </Link>
        </div>
      </Fade>

      <Fade bottom>
        <div className="flex items-center justify-center flex-1 h-full ">
          <img src={require("../images/hero2jpg.jpg")} />
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
