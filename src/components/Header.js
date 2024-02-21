import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuUnfoldLine } from "react-icons/ri";
import AboutUs from "./AboutUs";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleAboutUsClick = () => {
    setShowAboutUs(true);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`absolute w-full h-[5rem] z-[1000]`}>
      <div className="hidden lg:flex items-center w-full h-full xl:max-w-[1250px] mx-auto px-4">
        <p className="font-bold text-[1.5rem] cursor-pointer ">
          <Link to="/">Sharpshooter Arena Central</Link>{" "}
          {/* Use Link for Home */}
        </p>

        <div className="flex-1 flex items-center justify-end space-x-10">
          <ul className="flex items-center space-x-6">
            <li className="text-sm cursor-pointer hover:text-gray-200 ">
              <Link to="/">Home</Link> {/* Use Link for other menu items */}
            </li>
            <li className="text-sm cursor-pointer hover:text-gray-200 ">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-sm cursor-pointer hover:text-gray-200 ">
              <Link to="/games">Games we host</Link>
            </li>
            <li className="text-sm cursor-pointer hover:text-gray-200 ">
              <Link to="/news">News</Link>
            </li>
            <li className="text-sm cursor-pointer hover:text-gray-200 ">
              <Link to="/content">Content</Link>
            </li>
          </ul>
          <button className="w-[8rem] py-2 bg-[#d80027] rounded-md hidden lg:block">
            Contact us
          </button>
        </div>
      </div>

      <div className="w-full h-full flex items-center px-4">
        <RiMenuUnfoldLine
          size={30}
          className="lg:hidden text-purple-500 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {showMenu && (
        <div className="bg-gray-900 text-white py-4 w-full">
          <ul className="flex flex-col items-center space-y-4">
            <li className="text-sm cursor-pointer hover:text-gray-200">
              <Link to="/">Home</Link>
            </li>
            {showAboutUs && <AboutUs />}
            <ul>
              <li className="text-sm cursor-pointer hover:text-gray-200 ">
                <Link to="/about" onClick={handleAboutUsClick}>
                  About Us
                </Link>
              </li>
            </ul>
            <li className="text-sm cursor-pointer hover:text-gray-200">
              <Link to="/games">Games</Link>
            </li>
            <li className="text-sm cursor-pointer hover:text-gray-200">
              <Link to="/news">News</Link>
            </li>
            <li className="text-sm cursor-pointer hover:text-gray-200 ">
              <Link to="/content">Content</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
