import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const GameDetail = () => {
  const { slug } = useParams();
  const game = data.games.find((game) => game.slug === slug);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <h2>{game.name}</h2>
      {/* Display other game details */}
    </div>
  );
};

export default GameDetail;
