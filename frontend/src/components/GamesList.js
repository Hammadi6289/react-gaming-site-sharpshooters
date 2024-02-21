import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const GamesList = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <Fade right>
        <div className="hero-section bg-gray-950 text-white py-20 mb-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Discover Our Games</h1>
            <p className="text-xl">Explore the most exciting games we host.</p>
          </div>
        </div>
      </Fade>

      <h2 className="text-4xl text-[#e87d0e] font-medium">
        Games that we are Hosting Currently
      </h2>
      <Fade bottom>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.games.map((game) => (
            <div
              key={game.slug}
              className="card bg-gray rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-4">
                <Link to={`/games/${game.slug}`}>
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-84 object-contain mx-auto hover:animate-pulse cursor-pointer" // Adjusted for aspect ratio and centered //className="mt-[2rem] hover:animate-pulse cursor-pointer "
                    style={{ maxHeight: "100%", maxWidth: "100%" }} // Ensures image is contained within dimensions
                  />
                </Link>
              </div>
              <div className="m-4">
                <div className="flex items-center">
                  {/* Display stars based on rating -- Example: Static 5 stars for simplicity */}
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={`text-yellow-500 ${
                        index < Math.round(game.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-yellow-500 text-sm">
                    {game.rating}
                  </span>
                </div>
                <span className="block text-white-900 text-base font-semibold">
                  {game.name}
                </span>
                <span className="block text-gray-500 text-sm">
                  {game.brand}
                </span>
                <span
                  className="block text-gray-500 text-sm overflow-hidden overflow-ellipsis"
                  style={{ maxHeight: "5rem" }}
                >
                  {game.description}
                </span>
              </div>
              <div className="m-4">
                <Link
                  to={`/games/${game.slug}`}
                  className="text-white p-2 flex justify-center rounded-md bg-gradient-to-r from-purple-500 to-red-500"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default GamesList;
