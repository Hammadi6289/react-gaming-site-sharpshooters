import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const GamesListDetail = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Your game list code */}
      {data.games.map((game) => (
        <div key={game.slug} className="card">
          {/* Other game information */}
          <Link to={`/games/${game.slug}`} className="game-link">
            Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GamesListDetail;
